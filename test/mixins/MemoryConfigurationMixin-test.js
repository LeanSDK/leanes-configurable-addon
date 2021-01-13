const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const path = process.env.ENV === 'build' ? "../../lib/index.dev" : "../../src/index.js";
const ConfigurableAddon = require(path).default;
const LeanES = require('@leansdk/leanes/src').default;
const {
  initialize, partOf, nameBy, resolver, meta, attribute, mixin, constant, plugin
} = LeanES.NS;

describe('MemoryConfigurationMixin', () => {
   describe('defineConfigProperties', () => {
     it('should define configuration properties', () => {
       @initialize
       @plugin(ConfigurableAddon)
       class Test extends LeanES {
         @nameBy static  __filename = 'Test';
         @meta static object = {};
         @constant ROOT = `${__dirname}/config/root`;
       }

       @initialize
       @partOf(Test)
       @mixin(Test.NS.MemoryConfigurationMixin)
       class TestConfiguration extends Test.NS.Configuration {
         @nameBy static  __filename = 'TestConfiguration';
         @meta static object = {};
       }

      const config = TestConfiguration.new();
      config.setName('TEST_CONFIG');
      config.setData({
        test1: {
          description: 'test1 description',
          type: 'string',
          default: 'Test1'
        },
        test2: {
          description: 'test2 description',
          type: 'number',
          default: 42.42
        },
        test3: {
          description: 'test3 description',
          type: 'boolean',
          default: true
        },
        test4: {
          description: 'test4 description',
          type: 'integer',
          default: 42
        },
        test5: {
          description: 'test5 description',
          type: 'json',
          default: JSON.stringify({
            test: "test"
          })
        },
        test6: {
          description: 'test6 description',
          type: 'password',
          default: 'testpassword'
        }
      });
      config.defineConfigProperties();
      assert.propertyVal(config, 'test1', 'Test1');
      assert.propertyVal(config, 'test2', 42.42);
      assert.propertyVal(config, 'test3', true);
      assert.propertyVal(config, 'test4', 42);
      assert.deepPropertyVal(config, 'test5', '{"test":"test"}');
      assert.propertyVal(config, 'test6', 'testpassword');
    });
  });
});

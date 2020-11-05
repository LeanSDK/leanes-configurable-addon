const { expect, assert } = require('chai');
const sinon = require('sinon');
const _ = require('lodash');
const ConfigurableAddon = ("../../../src/index.js").default;
const LeanES = require('leanes/src/leanes').default;
const {
  initialize, partOf, nameBy, meta, method, property, mixin, plugin, attribute, constant, plugin
} = LeanES.NS;

describe('ConfigurableMixin', () => {
   describe('configs', () => {
     it('should create configuration instance', () => {
      const KEY = 'TEST_CONFIG_MIXIN_001';
      const facade = LeanES.NS.Facade.getInstance(KEY);

      @initialize
      @plugin(ConfigurableAddon)
      class Test extends LeanES {
        @nameBy static  __filename = 'Test';
        @meta static object = {};
        @constant ROOT = `${__dirname}/config/root`;
      }

      @initialize
      @partOf(Test)
      class TestConfiguration extends LeanES.NS.Configuration {
        @nameBy static  __filename = 'TestConfiguration';
        @meta static object = {};
      }
      const configuration = Test.NS.Configuration.new();
      configuration.setName(LeanES.NS.CONFIGURATION);
      configuration.setData(Test.NS.ROOT);
      facade.registerProxy(configuration);

      @initialize
      @mixin(LeanES.NS.ConfigurableMixin)
      @partOf(Test)
      class TestConfigurable extends LeanES.NS.Proxy {
        @nameBy static  __filename = 'TestConfigurable';
        @meta static object = {};
      }
      const object = TestConfigurable.new('TEST');
      facade.registerProxy(object);
      const configs = object.configs;
      assert.deepPropertyVal(configs, 'test1', 'default');
      assert.deepPropertyVal(configs, 'test2', 42);
      assert.deepPropertyVal(configs, 'test3', true);
      assert.deepPropertyVal(configs, 'test4', 'test');
      facade.remove();
    });
  });
});

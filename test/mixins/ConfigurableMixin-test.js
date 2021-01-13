const { expect, assert } = require('chai');
const sinon = require('sinon');
const _ = require('lodash');
const path = process.env.ENV === 'build' ? "../../lib/index.dev" : "../../src/index.js";
const ConfigurableAddon = require(path).default;
const LeanES = require('@leansdk/leanes/src').default;

const {
  initialize, partOf, nameBy, meta, method, property, mixin, plugin, attribute, constant
} = LeanES.NS;

describe('ConfigurableMixin', () => {
   describe('configs', () => {
     it('should create configuration instance', () => {

      const KEY = 'TEST_CONFIG_MIXIN_001';

      @initialize
      @plugin(ConfigurableAddon)
      class Test extends LeanES {
        @nameBy static  __filename = 'Test';
        @meta static object = {};
        @constant ROOT = `${__dirname}/config/root`;
      }

      @initialize
      @partOf(Test)
      class ApplicationFacade extends Test.NS.Facade {
        @nameBy static  __filename = 'ApplicationFacade';
        @meta static object = {};

        @method initializeFacade(): void {
          super.initializeFacade();
          this.rebind('ApplicationModule').toConstructor(this.Module);
        }
      }

      const facade = ApplicationFacade.getInstance(KEY);

      @initialize
      @partOf(Test)
      @mixin(Test.NS.ConfigurableMixin)
      class TestConfigurable extends LeanES.NS.Proxy {
        @nameBy static  __filename = 'TestConfigurable';
        @meta static object = {};
      }
      facade.addProxy('TestConfigurable');
      const object = facade.getProxy('TestConfigurable');
      const configs = object.configs;
      assert.deepPropertyVal(configs, 'test1', 'default');
      assert.deepPropertyVal(configs, 'test2', 42);
      assert.deepPropertyVal(configs, 'test3', true);
      assert.deepPropertyVal(configs, 'test4', 'test');
      facade.remove();
    });
  });
});

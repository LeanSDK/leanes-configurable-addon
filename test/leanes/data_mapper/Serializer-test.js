const { expect, assert } = require('chai');
const _ = require('lodash');
const LeanES = require("../../../src/leanes/index.js").default;
const {
  Record, Serializer,
  initialize, module: moduleD, nameBy, meta, constant, method, attribute, mixin
} = LeanES.NS;

describe('Serializer', () => {
  describe('.normalize', () => {
    it('should normalize object value', async () => {

      @initialize
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class TestsCollection extends LeanES.NS.Collection {
        @nameBy static __filename = 'TestsCollection';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class TestRecord extends Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
        @method findRecordByName() {
          return Test.NS.TestRecord;
        }
        @attribute({ type: 'string' }) string;
        @attribute({ type: 'number' }) number;
        @attribute({ type: 'boolean' }) boolean;
      }

      const serializer = Serializer.new(TestsCollection.new('Tests', {
        delegate: 'TestRecord'
      }));
      const record = await serializer.normalize(Test.NS.TestRecord, {
        type: 'Test::TestRecord',
        string: 'string',
        number: 123,
        boolean: true
      });
      assert.instanceOf(record, Test.NS.TestRecord, 'Normalize is incorrect');
      assert.equal(record.type, 'Test::TestRecord', '`type` is incorrect');
      assert.equal(record.string, 'string', '`string` is incorrect');
      assert.equal(record.number, 123, '`number` is incorrect');
      assert.equal(record.boolean, true, '`boolean` is incorrect');
    });
  });
  describe('.serialize', () => {
    it('should serialize Record.prototype value', async () => {

      @initialize
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class TestsCollection extends LeanES.NS.Collection {
        @nameBy static __filename = 'TestsCollection';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class TestRecord extends Record {
        @nameBy static __filename = 'TestRecord';
        @meta static object = {};
        @method findRecordByName() {
          return Test.NS.TestRecord;
        }
        @attribute({ type: 'string' }) string;
        @attribute({ type: 'number' }) number;
        @attribute({ type: 'boolean' }) boolean;
      }
      const col = TestsCollection.new('Tests', {
        delegate: 'TestRecord'
      });
      const serializer = Serializer.new(col);
      const data = await serializer.serialize(Test.NS.TestRecord.new({
        type: 'Test::TestRecord',
        string: 'string',
        number: 123,
        boolean: true
      }), col);
      assert.instanceOf(data, Object, 'Serialize is incorrect');
      assert.equal(data.type, 'Test::TestRecord', '`type` is incorrect');
      assert.equal(data.string, 'string', '`string` is incorrect');
      assert.equal(data.number, 123, '`number` is incorrect');
      assert.equal(data.boolean, true, '`boolean` is incorrect');
    });
  });
  describe('.replicateObject', () => {
    let facade = null;
    const KEY = 'TEST_SERIALIZER_001';
    after(() => {
      facade != null ? typeof facade.remove === "function" ? facade.remove() : void 0 : void 0;
    });
    it('should create replica for serializer', async () => {
      facade = LeanES.NS.Facade.getInstance(KEY);

      @initialize
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @mixin(LeanES.NS.MemoryCollectionMixin)
      @mixin(LeanES.NS.GenerateUuidIdMixin)
      @moduleD(Test)
      class MyCollection extends LeanES.NS.Collection {
        @nameBy static __filename = 'MyCollection';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class MySerializer extends Serializer {
        @nameBy static __filename = 'MySerializer';
        @meta static object = {};
      }
      const COLLECTION = 'COLLECTION';
      let collection = facade.registerProxy(MyCollection.new(COLLECTION, {
        delegate: Test.NS.Record,
        serializer: MySerializer
      }));
      collection = facade.retrieveProxy(COLLECTION);
      const replica = await MySerializer.replicateObject(collection.serializer);
      assert.deepEqual(replica, {
        type: 'instance',
        class: 'MySerializer',
        multitonKey: KEY,
        collectionName: COLLECTION
      });
    });
  });
  describe('.restoreObject', () => {
    let facade = null;
    const KEY = 'TEST_SERIALIZER_002';
    after(() => {
      facade != null ? typeof facade.remove === "function" ? facade.remove() : void 0 : void 0;
    });
    it('should restore serializer from replica', async () => {
      facade = LeanES.NS.Facade.getInstance(KEY);

      @initialize
      class Test extends LeanES {
        @nameBy static __filename = 'Test';
        @meta static object = {};
      }

      @initialize
      @mixin(LeanES.NS.MemoryCollectionMixin)
      @mixin(LeanES.NS.GenerateUuidIdMixin)
      @moduleD(Test)
      class MyCollection extends LeanES.NS.Collection {
        @nameBy static __filename = 'MyCollection';
        @meta static object = {};
      }

      @initialize
      @moduleD(Test)
      class MySerializer extends Serializer {
        @nameBy static __filename = 'MySerializer';
        @meta static object = {};
      }
      const COLLECTION = 'COLLECTION';
      let collection = facade.registerProxy(MyCollection.new(COLLECTION, {
        delegate: Test.NS.Record,
        serializer: MySerializer
      }));
      collection = facade.retrieveProxy(COLLECTION);
      const restoredRecord = await MySerializer.restoreObject(Test, {
        type: 'instance',
        class: 'MySerializer',
        multitonKey: KEY,
        collectionName: COLLECTION
      });
      assert.deepEqual(collection.serializer, restoredRecord);
    });
  });
});
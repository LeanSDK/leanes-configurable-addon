'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var __filename$1 = '/proxies/Configuration.js';

// This file is part of leanes-configurable-addon.
//
// leanes-configurable-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-configurable-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-configurable-addon.  If not, see <https://www.gnu.org/licenses/>.
var hasProp = {}.hasOwnProperty;
var ConfigurationTF = (function (Module) {
  var _dec, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

  var _Module$NS = Module.NS,
      PRODUCTION = _Module$NS.PRODUCTION,
      DEVELOPMENT = _Module$NS.DEVELOPMENT,
      ENV = _Module$NS.ENV,
      Proxy = _Module$NS.Proxy,
      assert = _Module$NS.assert,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      nameBy = _Module$NS.nameBy,
      _Module$NS$Utils = _Module$NS.Utils,
      _ = _Module$NS$Utils._,
      assign = _Module$NS$Utils.assign;
  var Configuration = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Proxy) {
    _inherits(Configuration, _Proxy);

    var _super = _createSuper(Configuration);

    function Configuration() {
      var _this;

      _classCallCheck(this, Configuration);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_this, "_configI", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_name", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_description", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_license", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_version", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_keywords", _descriptor6, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(Configuration, [{
      key: "defineConfigProperties",
      value: function defineConfigProperties() {
        var _this2 = this;

        var manifestPath = "".concat(this.root, "/").concat(this.manifestPath);

        var manifest = this.ApplicationModule.require(manifestPath);

        this._name = manifest.name;
        this._description = manifest.description;
        this._license = manifest.license;
        this._version = manifest.version;
        this._keywords = manifest.keywords;
        var configFromManifest = manifest.configuration;
        var filePath = "".concat(this.root, "/").concat(this.configPath);

        var configFromFile = this.ApplicationModule.require(filePath);

        var configs = assign({}, configFromManifest, configFromFile);

        for (var key in configs) {
          if (!hasProp.call(configs, key)) continue;
          var value = configs[key];

          (function (attr, config) {
            assert(config.description != null, 'Description in config definition is required');
            assert(!config.required || config["default"] != null, "Attribute '".concat(attr, "' is required in config"));
            assert(config.type != null, 'Type in config definition is required');

            switch (config.type) {
              case 'string':
                assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be string"));
                break;

              case 'number':
                assert(_.isNumber(config["default"]), "Default for '".concat(attr, "' must be number"));
                break;

              case 'boolean':
                assert(_.isBoolean(config["default"]), "Default for '".concat(attr, "' must be boolean"));
                break;

              case 'integer':
                assert(_.isInteger(config["default"]), "Default for '".concat(attr, "' must be integer"));
                break;

              case 'json':
                assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be JSON string"));

                try {
                  JSON.parse(config["default"]);
                } catch (error) {
                  assert.fail("Default for '".concat(attr, "' is not valid JSON"));
                }

                break;

              case 'password':
                assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be string"));
            }

            Reflect.defineProperty(_this2, attr, {
              enumerable: true,
              configurable: true,
              writable: false,
              value: config.type === 'json' ? JSON.parse(config["default"]) : config["default"]
            });
          })(key, value);
        }
      }
    }, {
      key: "onRegister",
      value: function onRegister() {
        var _get2;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_get2 = _get(_getPrototypeOf(Configuration.prototype), "onRegister", this)).call.apply(_get2, [this].concat(args));

        this.defineConfigProperties();
      }
    }, {
      key: "root",
      get: function get() {
        return this.getData() || '.';
      }
    }, {
      key: "environment",
      get: function get() {

        if (ENV === 'production') {
          return PRODUCTION;
        } else {
          return DEVELOPMENT;
        }
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "description",
      get: function get() {
        return this._description;
      }
    }, {
      key: "license",
      get: function get() {
        return this._license;
      }
    }, {
      key: "version",
      get: function get() {
        return this._version;
      }
    }, {
      key: "keywords",
      get: function get() {
        return this._keywords;
      }
    }, {
      key: "manifestPath",
      get: function get() {
        return 'manifest.json';
      }
    }, {
      key: "configPath",
      get: function get() {
        return "configs/".concat(this.environment);
      }
    }]);

    return Configuration;
  }(Proxy), _class3.__filename = __filename$1, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_configI", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'ConfigurationInterface';
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "root", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "root"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "environment", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "environment"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_name", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_description", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_license", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_version", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_keywords", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "name", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "name"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "description", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "description"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "license", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "license"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "version", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "version"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "keywords", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keywords"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "manifestPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "manifestPath"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "configPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configPath"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "defineConfigProperties", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "defineConfigProperties"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class);
});

var __filename$2 = '/mixins/ConfigurableMixin.js';

// This file is part of leanes-configurable-addon.
//
// leanes-configurable-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-configurable-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-configurable-addon.  If not, see <https://www.gnu.org/licenses/>.
var ConfigurableMixinTF = (function (Module) {
  var _Module$NS = Module.NS,
      CONFIGURATION = _Module$NS.CONFIGURATION,
      CoreObject = _Module$NS.CoreObject,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      inject = _Module$NS.inject;
  Module.defineMixin(__filename$2, function (BaseClass) {
    var _dec, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

    var Mixin = (_dec = inject("Factory<".concat(CONFIGURATION, ">")), initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        var _this;

        _classCallCheck(this, Mixin);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _initializerDefineProperty(_this, "_configurableI", _descriptor, _assertThisInitialized(_this));

        _initializerDefineProperty(_this, "_configurationFactory", _descriptor2, _assertThisInitialized(_this));

        return _this;
      }

      _createClass(Mixin, [{
        key: "configs",
        get: function get() {
          return this._configurationFactory();
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_configurableI", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 'ConfigurableInterface';
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_configurationFactory", [_dec, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), _applyDecoratedDescriptor(_class2.prototype, "configs", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configs"), _class2.prototype)), _class2)) || _class);
    return Mixin;
  });
});

var __filename$3 = '/mixins/MemoryConfigurationMixin.js';

// This file is part of leanes-configurable-addon.
//
// leanes-configurable-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-configurable-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-configurable-addon.  If not, see <https://www.gnu.org/licenses/>.
var hasProp$1 = {}.hasOwnProperty;
var MemoryConfigurationMixinTF = (function (Module) {
  var _Module$NS = Module.NS,
      Configuration = _Module$NS.Configuration,
      assert = _Module$NS.assert,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      _Module$NS$Utils = _Module$NS.Utils,
      _ = _Module$NS$Utils._,
      assign = _Module$NS$Utils.assign;
  Module.defineMixin(__filename$3, function (BaseClass) {
    var _class, _class2, _init, _class3, _temp;

    var Mixin = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        _classCallCheck(this, Mixin);

        return _super.apply(this, arguments);
      }

      _createClass(Mixin, [{
        key: "defineConfigProperties",
        value: function defineConfigProperties() {
          var _this = this;

          var manifestPath = "".concat(this.root, "/").concat(this.manifestPath);

          var manifest = this.ApplicationModule.require(manifestPath);

          this._name = manifest.name;
          this._description = manifest.description;
          this._license = manifest.license;
          this._version = manifest.version;
          this._keywords = manifest.keywords;
          var configFromManifest = manifest.configuration;
          var configs = assign({}, configFromManifest, this.getData());

          for (var key in configs) {
            if (!hasProp$1.call(configs, key)) continue;
            var value = configs[key];

            (function (attr, config) {
              assert(config.description != null, 'Description in config definition is required');
              assert(!config.required || config["default"] != null, "Attribute '".concat(attr, "' is required in config"));
              assert(config.type != null, 'Type in config definition is required');

              switch (config.type) {
                case 'string':
                  assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be string"));
                  break;

                case 'number':
                  assert(_.isNumber(config["default"]), "Default for '".concat(attr, "' must be number"));
                  break;

                case 'boolean':
                  assert(_.isBoolean(config["default"]), "Default for '".concat(attr, "' must be boolean"));
                  break;

                case 'integer':
                  assert(_.isInteger(config["default"]), "Default for '".concat(attr, "' must be integer"));
                  break;

                case 'json':
                  assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be JSON string"));

                  try {
                    JSON.parse(config["default"]);
                  } catch (error) {
                    assert.fail("Default for '".concat(attr, "' is not valid JSON"));
                  }

                  break;

                case 'password':
                  assert(_.isString(config["default"]), "Default for '".concat(attr, "' must be string"));
              }

              Reflect.defineProperty(_this, attr, {
                enumerable: true,
                configurable: true,
                writable: false,
                value: config["default"]
              });
            })(key, value);
          }
        }
      }, {
        key: "root",
        get: function get() {
          return this.Module.prototype.ROOT || '.';
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _applyDecoratedDescriptor(_class2.prototype, "root", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "root"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "defineConfigProperties", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "defineConfigProperties"), _class2.prototype)), _class2)) || _class;

    return Mixin;
  });
});

var __filename$4 = '/patches/FacadePatch.js';

// This file is part of leanes-configurable-addon.
//
// leanes-configurable-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-configurable-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-configurable-addon.  If not, see <https://www.gnu.org/licenses/>.
var FacadePatchTF = (function (Module) {
  var _Module$NS = Module.NS,
      CONFIGURATION = _Module$NS.CONFIGURATION,
      initializePatch = _Module$NS.initializePatch,
      meta = _Module$NS.meta,
      method = _Module$NS.method,
      _ = _Module$NS.Utils._;
  Module.definePatch(__filename$4, function (BaseClass) {
    var _class, _class2, _init, _class3, _temp;

    var Patch = initializePatch(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Patch, _BaseClass);

      var _super = _createSuper(Patch);

      function Patch() {
        _classCallCheck(this, Patch);

        return _super.apply(this, arguments);
      }

      _createClass(Patch, [{
        key: "initializeFacade",
        value: function initializeFacade() {
          _get(_getPrototypeOf(Patch.prototype), "initializeFacade", this).apply(this, arguments);

          this.addProxy(CONFIGURATION, 'Configuration', this.Module.NS.ROOT);
        }
      }]);

      return Patch;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _applyDecoratedDescriptor(_class2.prototype, "initializeFacade", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeFacade"), _class2.prototype)), _class2)) || _class;

    return Patch;
  });
});

var index = (function (Module) {
  var _Module$NS = Module.NS,
      BaseModule = _Module$NS.Module,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      constant = _Module$NS.constant,
      method = _Module$NS.method,
      patch = _Module$NS.patch;
  return ['ConfigurableAddon', function (BaseClass) {
    var _class, _class2, _init, _descriptor, _class3, _temp;

    var Mixin = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        var _this;

        _classCallCheck(this, Mixin);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _initializerDefineProperty(_this, "CONFIGURATION", _descriptor, _assertThisInitialized(_this));

        return _this;
      }

      _createClass(Mixin, null, [{
        key: "including",
        value: function including() {
          patch(this.NS.FacadePatch)(this.NS.Facade);
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "CONFIGURATION", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 'ConfigurationProxy';
      }
    }), _applyDecoratedDescriptor(_class2, "including", [method], Object.getOwnPropertyDescriptor(_class2, "including"), _class2)), _class2)) || _class;

    ConfigurationTF(Mixin);
    ConfigurableMixinTF(Mixin);
    MemoryConfigurationMixinTF(Mixin);
    FacadePatchTF(Mixin);
    return Mixin;
  }];
});

module.exports = index;
//# sourceMappingURL=index.js.map

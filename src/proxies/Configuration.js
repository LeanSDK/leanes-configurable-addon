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

import type { ConfigurationInterface } from '../interfaces/ConfigurationInterface';

const hasProp = {}.hasOwnProperty;

export default (Module) => {
  const {
    PRODUCTION, DEVELOPMENT, ENV,
    Proxy,
    assert,
    initialize, partOf, meta, property, method, nameBy,
    Utils: { _, assign }
  } = Module.NS;

  @initialize
  @partOf(Module)
  class Configuration extends Proxy implements ConfigurationInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property _configI = 'ConfigurationInterface';

    @property get root(): string {
      return this.getData() || '.';
    }

    @property get environment(): string {
      let ref;
      if (ENV === 'production') {
        return PRODUCTION;
      } else {
        return DEVELOPMENT;
      }
    }

    @property _name: ?string = null;

    @property _description: ?string = null;

    @property _license: ?string = null;

    @property _version: ?string = null;

    @property _keywords: ?string[] = null;

    @property get name(): ?string {
      return this._name;
    }

    @property get description(): ?string {
      return this._description;
    }

    @property get license(): ?string {
      return this._license;
    }

    @property get version(): ?string {
      return this._version;
    }

    @property get keywords(): ?string[] {
      return this._keywords;
    }

    @property get manifestPath(): string {
      return 'package.json';
    }

    @property get configPath(): string {
      return `configs/${this.environment}`;
    }

    @method defineConfigProperties() {
      const manifestPath = `${this.root}/${this.manifestPath}`;
      const manifest = this.ApplicationModule.require(manifestPath);
      this._name = manifest.name;
      this._description = manifest.description;
      this._license = manifest.license;
      this._version = manifest.version;
      this._keywords = manifest.keywords;
      const configFromManifest = manifest.configuration;
      const filePath = `${this.root}/${this.configPath}`;
      const configFromFile = this.ApplicationModule.require(filePath);
      const configs = assign({}, configFromManifest, configFromFile);
      for (const key in configs) {
        if (!hasProp.call(configs, key)) continue;
        const value = configs[key];
        ((attr, config) => {
          assert(config.description != null, 'Description in config definition is required');
          assert(!config.required || (config.default != null), `Attribute '${attr}' is required in config`);
          assert(config.type != null, 'Type in config definition is required');
          switch (config.type) {
            case 'string':
              assert(_.isString(config.default), `Default for '${attr}' must be string`);
              break;
            case 'number':
              assert(_.isNumber(config.default), `Default for '${attr}' must be number`);
              break;
            case 'boolean':
              assert(_.isBoolean(config.default), `Default for '${attr}' must be boolean`);
              break;
            case 'integer':
              assert(_.isInteger(config.default), `Default for '${attr}' must be integer`);
              break;
            case 'json':
              assert(_.isString(config.default) || _.isPlainObject(config.default), `Default for '${attr}' must be JSON string or js object`);
              try {
                if (_.isString(config.default)) JSON.parse(config.default);
              } catch (error) {
                assert.fail(`Default for '${attr}' is not valid JSON`);
              }
              break;
            case 'password':
              assert(_.isString(config.default), `Default for '${attr}' must be string`)
          }
          Reflect.defineProperty(this, attr, {
            enumerable: true,
            configurable: true,
            writable: false,
            value: config.type === 'json' && _.isString(config.default) ? JSON.parse(config.default) : config.default
          });
        })(key, value);
      }
    }

    @method onRegister(...args) {
      super.onRegister(...args);
      this.defineConfigProperties();
    }
  }
}

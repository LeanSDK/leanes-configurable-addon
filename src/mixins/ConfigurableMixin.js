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
import type { ConfigurableInterface } from '../interfaces/ConfigurableInterface';

import { inject } from 'inversify';

export default (Module) => {
  const {
    CONFIGURATION,
    CoreObject,
    initializeMixin, meta, property,
  } = Module.NS;

  Module.defineMixin(__filename, (BaseClass: Class<CoreObject>) => {
    @initializeMixin
    class Mixin extends BaseClass implements ConfigurableInterface {
      @meta static object = {};

      @property _configurableInterface = 'ConfigurableInterface'

      @inject(`Factory<${CONFIGURATION}>`)
      @property _configurationFactory: <T = ConfigurationInterface>() => $Rest<T, {_configI: $PropertyType<T, '_configI'>}>;

      @property get configs <T = ConfigurationInterface>(): $Rest<T, {_configI: $PropertyType<T, '_configI'>}> {
        return this._configurationFactory();
      }
    }
    return Mixin;
  });
}

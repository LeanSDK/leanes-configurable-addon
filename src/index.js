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

export type { ConfigurationInterface } from './interfaces/ConfigurationInterface';
export type { ConfigurableInterface } from './interfaces/ConfigurableInterface';

import Configuration from './proxies/Configuration';

import ConfigurableMixin from './mixins/ConfigurableMixin';
import MemoryConfigurationMixin from './mixins/MemoryConfigurationMixin';

import FacadePatch from './patches/FacadePatch';

export default (Module) => {
  const {
    initializeMixin, meta, constant, method, patch
  } = Module.NS;

  return ['ConfigurableAddon', (BaseClass) => {
    @FacadePatch

    @MemoryConfigurationMixin
    @ConfigurableMixin

    @Configuration

    @initializeMixin
    class Mixin extends BaseClass {
      @meta static object = {};

      @constant CONFIGURATION =  'ConfigurationProxy';

      @method static including() {
        patch(this.NS.FacadePatch)(this.NS.Facade);
      }
    }
    return Mixin;
  }]
}

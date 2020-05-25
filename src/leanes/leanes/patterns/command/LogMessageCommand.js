import type { NotificationInterface } from '../../../patternes';

export default (Module) => {
  const {
    SimpleCommand, Application,
    initialize, module, meta, method, nameBy
  } = Module.NS;
  const { LOGGER_PROXY } = Application;


  @initialize
  @module(Module)
  class LogMessageCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      const proxy = this.facade.getProxy(LOGGER_PROXY);
      proxy.addLogEntry(aoNotification.getBody());
      return;
    }
  }
}

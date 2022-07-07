"use strict";

var _bus = _interopRequireDefault(require("../bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  if (this.opts.destroyEventBus) {
    _bus["default"].$off();

    _bus["default"].$destroy();
  }

  if (this.vuex && !this.opts.preserveState) {
    this.$store.unregisterModule(this.name);
  }
};
import EventBus from '../bus';

module.exports = function() {
    if (this.opts.destroyEventBus) {
        EventBus.$off();
        EventBus.$destroy();
    }

    if (this.vuex && !this.opts.preserveState) {
        this.$store.unregisterModule(this.name);
    }
}

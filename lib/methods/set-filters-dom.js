module.exports = function(query) {

  var el;

  if (this.opts.filterByColumn) {

    for (var column in query) {

      var columnName = this._getColumnName(column);

      if (this.isDateFilter(column)) {
        continue;
      }

        el = this.$el.querySelector("[name='".concat(columnName.replace("'","\\'"), "']"));

        if (el) {
          el.value = query[column];
        } else if (this.columns.indexOf(column)===-1) {
          console.error(`vue-tables-2: Error in setting filter value. Column '${column}' does not exist.`);
        }
    }
  } else {
    var el = this.$el.querySelector('.VueTables__search__input');

    if (el)  el.value = query;
  }
}


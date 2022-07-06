"use strict";

module.exports = function (_ref) {
  var date = _ref.date,
      column = _ref.column;

  var search = function search(query, e) {
    return this.source == 'client' ? this.search(that.data, e) : this.serverSearch(query, e);
  };

  this.query[column] = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate(), " 23:59:59");
  search();
};
"use strict";

module.exports = function (_ref) {
  var _this = this;

  var date = _ref.date,
      column = _ref.column;

  var search = function search(e) {
    return _this.source == 'client' ? _this.search(that.data, e) : _this.serverSearch(_this.query, e);
  };

  this.query[column] = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate(), " 23:59:59");
  search({
    target: {
      name: this._getColumnName(column),
      value: this.query[column]
    }
  });
};
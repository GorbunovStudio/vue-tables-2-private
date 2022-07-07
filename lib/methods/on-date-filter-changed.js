module.exports = function({date, column}) {
    var search = ( e) => {
        return this.source == 'client' ? this.search(that.data, e) : this.serverSearch(this.query, e);
    }

    this.query[column] = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} 23:59:59`;

    search({target: {name: this._getColumnName(column), value: this.query[column]}});
}
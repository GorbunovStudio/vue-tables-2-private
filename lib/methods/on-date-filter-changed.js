module.exports = function({date, column}) {
    var search = function (query, e) {
        return this.source == 'client' ? this.search(that.data, e) : this.serverSearch(query, e);
    }

    this.query[column] = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} 23:59:59`;
      search();
}
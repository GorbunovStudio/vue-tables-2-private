var ClientTable = require('./v-client-table');
var ServerTable = require('./v-server-table');
import Event from './bus';

require('jquery');
var daterangepicker = require('daterangepicker');
$().daterangepicker = daterangepicker;

module.exports = {
  ClientTable,
  ServerTable,
  Event
};
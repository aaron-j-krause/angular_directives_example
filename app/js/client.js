const angular = require('angular');

var PhotosApp = angular.module('PhotosApp', []);
require('./photos')(PhotosApp);

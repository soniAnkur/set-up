//////<reference path="../../../typings/tsd.d.ts"/>
import route = require("common/conf/app.routes");
(function () {
    "use strict";

    angular.module("vicky", ["vicky.controllers", "ngRoute", "restangular","pascalprecht.translate"])
        .config(route.Route.configuration);

})();

define(["require", "exports", "common/conf/app.routes"], function (require, exports, route) {
    (function () {
        "use strict";
        angular.module("vicky", ["vicky.controllers", "ngRoute", "restangular", "pascalprecht.translate"]).config(route.Route.configuration);
    })();
});

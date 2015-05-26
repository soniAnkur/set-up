"use strict";

require.config({
    paths: {
        "angular": "../node_modules/angular/angular",
        "angular-route": "../node_modules/angular-route/angular-route",
        "angular-translate": "../node_modules/angular-translate/dist/angular-translate",
        "angular-partial-loader": "../node_modules/angular-translate-loader-partial/angular-translate-loader-partial",
        "registry": "common/conf/app.modules.registry",
        "lodash": "../node_modules/lodash/lodash",
        "restangular":"../node_modules/restangular/src/restangular",
        "main": "common/conf/app.core.module"
    }, shim: {
        "angular": {
            exports: "angular"
        },
        "lodash": {
            deps: ["angular"],
            exports: "lodash"
        },
        "restangular": {
            deps: ["angular","lodash"],
            exports: "restangular"
        },
        "angular-route": {
            deps: ["angular"],
            exports: "angular-route"
        },
        "angular-translate": {
            deps: ["angular"],
            exports: "angular-translate"
        },
        "angular-partial-loader": {
            deps: ["angular","angular-translate"],
            exports: "angular-partial-loader"
        },
        "registry": {
            deps: ["angular"],
            exports: "registry"
        },
        "main": {
            deps: ["angular", "angular-route", "registry", "angular-ui","restangular"],
            exports: "main"
        }
    }
});


require(["angular", "angular-route", "angular-translate","angular-partial-loader","registry", "lodash", "restangular","main"], function (angular) {
    angular.bootstrap(document, ["vicky"]);

});

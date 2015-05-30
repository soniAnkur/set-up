///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../typings/angularjs/angular-route.d.ts"/>

import AccountStatementCtrl = require("../../account-statement/controllers/vicky.accountStatementController");

export class Route {

    static $inject = ["$routeProvider", "RestangularProvider", "$translateProvider", "$translatePartialLoaderProvider","$locationProvider"];


    static configuration($routeProvider: ng.route.IRouteProvider, RestangularProvider: restangular.IProvider
        , $translateProvider : ng.translate.ITranslateProvider , $translatePartialLoaderProvider : ng.translate.ITranslatePartialLoaderProvider) {
        $routeProvider

            .when("/account-statement", {

                controller: AccountStatementCtrl.AccountStatementController.id ,
                templateUrl: "account-statement/partials/account-statement.html"

            });

        $routeProvider.otherwise({ redirectTo: "/account-statement" });

        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'translation/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('en-AU');

        RestangularProvider.setBaseUrl("http://127.0.0.1:8080/app/static-data");

    }

}


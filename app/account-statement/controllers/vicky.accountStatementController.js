///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../services/vicky.accountStatementService.ts" />
'use strict';
var AccountStatementController = (function () {
    function AccountStatementController($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
        $scope.moduleName = "accountStatement";
        /*  $scope.iBanCollection = this.$http.get("/myDummyURL").then(response : ng.IHttpPromiseCallbackArg<IStockProvider[]>))*/
    }
    AccountStatementController.id = "vicky.accountStatementController";
    return AccountStatementController;
})();
angular.module("vicky.controllers").controller(AccountStatementController.id, AccountStatementController);

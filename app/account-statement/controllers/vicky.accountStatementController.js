///<reference path="../../../typings/tsd.d.ts" />
'use strict';
var AccountStatementController = (function () {
    function AccountStatementController($scope) {
        $scope.moduleName = "accountStatement";
    }
    AccountStatementController.id = "vicky.accountStatementController";
    return AccountStatementController;
})();
angular.module("vicky.controllers").controller(AccountStatementController.id, AccountStatementController);

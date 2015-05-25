///<reference path="../../../typings/tsd.d.ts" />

'use strict';

interface AccountStatementScope extends ng.IScope {

    moduleName : string;
}

class AccountStatementController {
    static id : string = "vicky.accountStatementController";

    constructor($scope : AccountStatementScope){
        $scope.moduleName = "accountStatement";
    }
}

angular.module("vicky.controllers").controller(AccountStatementController.id,AccountStatementController);
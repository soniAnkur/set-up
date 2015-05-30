///<reference path="../../../typings/angularjs/angular.d.ts"/>
import AccountStatementService = require("../services/vicky.accountStatementService");

interface AccountStatementScope extends ng.IScope {

    moduleName : string;
    iBanCollection : Array<any>;
}

export class AccountStatementController {
    static id : string = "vicky.accountStatementController";

    static $inject = ["$scope", AccountStatementService.AccountStatementService.id];

    constructor(private $scope : AccountStatementScope,private accountStatmentService : AccountStatementService.IAccountStatementService ){
          $scope.moduleName = "accountStatement";
          $scope.iBanCollection = accountStatmentService.getIbanCollection();
    }
}

angular.module("vicky.controllers").controller(AccountStatementController.id,AccountStatementController);
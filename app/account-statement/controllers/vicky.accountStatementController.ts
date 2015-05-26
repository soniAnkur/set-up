///<reference path="../../../typings/tsd.d.ts" />
import AccountStatementService = require("../services/vicky.accountStatementService");

'use strict';

interface AccountStatementScope extends ng.IScope {

    moduleName : string;
    iBanCollection : Array<AccountStatementService.IIbanBO>;
}

class AccountStatementController {
    static id : string = "vicky.accountStatementController";

    constructor(private $scope : AccountStatementScope,$service : AccountStatementService.IAccountStatementService ){
        $scope.moduleName = "accountStatement";
      // $scope.iBanCollection = $service.getIbanCollection().then((response: Array<AccountStatementService.IIbanBO>) : Array<AccountStatementService.IIbanBO> => {
      //     return response.data;
     //  });
    }
}

angular.module("vicky.controllers").controller(AccountStatementController.id,AccountStatementController);
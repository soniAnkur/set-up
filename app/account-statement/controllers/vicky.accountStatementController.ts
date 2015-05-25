///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../services/vicky.accountStatementService.ts" />

'use strict';

interface AccountStatementScope extends ng.IScope {

    moduleName : string;
    iBanCollection : Array<any>;
}

class AccountStatementController {
    static id : string = "vicky.accountStatementController";



    constructor(private $scope : AccountStatementScope,private $http : ng.IHttpService ){
        $scope.moduleName = "accountStatement";
      /*  $scope.iBanCollection = this.$http.get("/myDummyURL").then(response : ng.IHttpPromiseCallbackArg<IStockProvider[]>))*/

    }
}

angular.module("vicky.controllers").controller(AccountStatementController.id,AccountStatementController);
///<reference path="../../../typings/restangular/restangular.d.ts" />
"use strict";
export interface IAccountStatementService{
    getIbanCollection() : Array<any>;
}

export class AccountStatementService implements  IAccountStatementService{
    static id: string = "vicky.accountStatementService";

    constructor(private Restangular : restangular.IService ) {
        this.Restangular = Restangular;
    }
    getIbanCollection(): Array<any> {
       return this.Restangular.all("custom.json").getList().$object;
    }
}
factory.$inject = ["Restangular"];

function factory(restangular : restangular.IService): IAccountStatementService {
    return new AccountStatementService(restangular);
}

angular.module("vicky.services").factory(AccountStatementService.id, factory);

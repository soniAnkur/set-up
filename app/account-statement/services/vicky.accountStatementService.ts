///<reference path="../../../typings/tsd.d.ts" />
"use strict";
export interface IAccountStatementService{
    getIbanCollection() : ng.IPromise<Array<IIbanBO>>;
}

export interface IIbanBO{
    id:number;
    value:string;
}
class AccountStatementService implements  IAccountStatementService{
    static id: string = "vicky.service.accountStatementService";
    constructor(private $http: ng.IHttpService ) {
        this.$http = $http;
    }
    getIbanCollection(): ng.IPromise<Array<IIbanBO>> {
        return this.$http.get("location")
            .then((response: ng.IHttpPromiseCallbackArg<IIbanBO[]>): IIbanBO[]=> {
                return response.data;
            });
    }
}
factory.$inject = ["$http"];

function factory($http: ng.IHttpService): IProviderService {
    return new AccountStatementService($http);
}

angular.module("vicky.services").factory(AccountStatementService.id, factory);

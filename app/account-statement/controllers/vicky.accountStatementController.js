'use strict';
var AccountStatementController = (function () {
    function AccountStatementController($scope, $service) {
        this.$scope = $scope;
        $scope.moduleName = "accountStatement";
        // $scope.iBanCollection = $service.getIbanCollection().then((response: Array<AccountStatementService.IIbanBO>) : Array<AccountStatementService.IIbanBO> => {
        //     return response.data;
        //  });
    }
    AccountStatementController.id = "vicky.accountStatementController";
    return AccountStatementController;
})();
angular.module("vicky.controllers").controller(AccountStatementController.id, AccountStatementController);

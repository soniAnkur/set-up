define(["require", "exports", "../services/vicky.accountStatementService"], function (require, exports, AccountStatementService) {
    var AccountStatementController = (function () {
        function AccountStatementController($scope, accountStatmentService) {
            this.$scope = $scope;
            this.accountStatmentService = accountStatmentService;
            $scope.moduleName = "accountStatement";
            $scope.iBanCollection = accountStatmentService.getIbanCollection();
        }
        AccountStatementController.id = "vicky.accountStatementController";
        AccountStatementController.$inject = ["$scope", AccountStatementService.AccountStatementService.id];
        return AccountStatementController;
    })();
    exports.AccountStatementController = AccountStatementController;
    angular.module("vicky.controllers").controller(AccountStatementController.id, AccountStatementController);
});

describe('testControllers', function() {
  // Load the module with MainController
  beforeEach(module('vicky.controllers'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('vicky.accountStatementController', {
      $scope: scope
    });
  }));


  /*1st test case*/
  it('should give $scope.moduleName',function() {
      expect(scope.moduleName).toBe("accountStatement");
      });
  /*2nd test case || negative*/

  /*it('should give $scope.moduleName',function() {
      expect(scope.moduleName).toBe("aaa");
      });*/
});
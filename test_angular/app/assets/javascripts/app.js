(function(){
var app = angular.module('smartDeals', ['ngMaterial','ngMessages']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
app.controller('smartDealsController',function($scope,$mdDialog){
  var web3 = new Web3();
  this.pizzas = pizzas;
  var variable;


  $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  },
        templateUrl: 'solution_controller/index',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };



});
    var pizzas = [
      {
        name: 'Vegetariana',
        price: 400,
        description: 'Very good pizza!',
        id: 1,
        images: [
          "assets/images/1.png",
          "assets/images/1.png",
          "assets/images/1.png"
        ],
      },
      {
        name: 'Quattro Formaggi',
        price: 300,
        description: 'Very good pizza!',
        id: 2,
        images: [
          "assets/images/1.png",
          "assets/images/1.png",
          "assets/images/1.png"
        ],
      },
      {
        name: 'Maltija (Maltese)',
        price: 300,
        description: 'Very good pizza!',
        id: 3,
        images: [
          "assets/images/1.jpg",
          "assets/images/1.jpg",
          "assets/images/1.jpg"
        ],
      }
    ];
})();

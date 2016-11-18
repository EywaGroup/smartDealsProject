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

  $scope.showAdvanced = function(ev, pizza) {

    $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {$scope.hide = function() {
          $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      $scope.tab1tittle = pizza.name;
      $scope.ingridients = pizza.ingridients;
      var total = 0;
      for (var i = pizza.ingridients.length - 1; i >= 0; i--) {
        total += pizza.ingridients[i].cost;
      }
      var coefficient = 3;
      total *= coefficient;
      pizza.price = total;
      $scope.total = total;

    },
      templateUrl: 'solution_controller/index',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    }).then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
};



});
    var pizzas = [
      {
        name: 'Vegetariana',
        price: -1,
        description: 'Very good pizza!',
        id: 1,
        image: 'assets/6.jpg',
        ingridients: [{
          name: 'tomato',
          cost: 15,
          provider: '1',
          weight: 35,
        },{
          name: 'dough',
          cost: 6,
          provider: '3',
          weight: 80,
        },{
          name: 'mushroom',
          cost: 36,
          provider: '4',
          weight: 40,
        },{
          name: 'cheese',
          cost: 24,
          provider: '5',
          weight: 30,
        }]
        
      },
      {
        name: 'Quattro Formaggi',
        price: -1,
        description: 'Very good pizza!',
        id: 2,
        image: 'assets/6.jpg',
        ingridients: [{
          name: 'dough',
          cost: 6,
          provider: '3',
          weight: 80,
        },{
          name: 'cheese',
          cost: 100,
          provider: '5',
          weight: 120,
        }]
      },
      {
        name: 'Maltija (Maltese)',
        price: -1,
        description: 'Very good pizza!',
        id: 3,
        image: 'assets/6.jpg',
        ingridients: [{
          name: 'tomato',
          cost: 15,
          provider: '1',
          weight: 35,
        },{
          name: 'meat',
          cost: 45,
          provider: '2',
          weight: 40,
        },{
          name: 'dough',
          cost: 6,
          provider: '3',
          weight: 80,
        },{
          name: 'olives',
          cost: 20,
          provider: '4',
          weight: 20,
        },{
          name: 'cheese',
          cost: 24,
          provider: '5',
          weight: 30,
        }]
      }
    ];
})();

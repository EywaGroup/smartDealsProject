(function(){
var app = angular.module('smartDeals', ['ngMaterial','ngMessages']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

app.controller('smartDealsController',function($scope,$mdDialog){
 
  this.pizzas = pizzas;
    var variable;
    var abi = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"addr","type":"address"},{"name":"goods","type":"uint256"}],"name":"pay","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tmpAddr","type":"address"}],"name":"search","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address[]"},{"name":"provCount","type":"uint256"},{"name":"mainAcc","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
     var Web3 = require('web3');
     var web3 = new Web3();
 
    

     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     $scope.accounts = accounts;

     var contractAddress = "0xb4a874d01c1234be5cd6b2a562b06892ed5d500c";
     var contract;
 
     $scope.myToken = accounts[0];
     $scope.myFunds = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase),"ether");
     
      
     
     contract = web3.eth.contract(abi).at(contractAddress);

     $scope.testMethod = function(){
          
          var bal = web3.fromWei(web3.eth.getBalance('0xb4a874d01c1234be5cd6b2a562b06892ed5d500c'));

        alert(bal);

     };

     $scope.initProviders = function(providersAddresses,providersAmount){
      alert(providersAddresses);       
      contract.init(providersAddresses,providersAmount,$scope.myToken).call();

     }; 
     $scope.pay = function(amountOfMoney,providerAddress,ingridientAmount){
      web3.personal.unlockAccount($scope.myToken,"qbasik007");
        var hash = {from: $scope.myToken,to: contractAddress,value: web3.toWei(amountOfMoney, "ether")};
        
       // web3.eth.sendTransaction(hash);        
        var res = contract.pay(amountOfMoney,providerAddress,ingridientAmount).call();;
        alert(1234);  
     };
     $scope.contractDone = function(){
        web3.personal.unlockAccount($scope.myToken,"qbasik007");
       var res = contract.contractDone.call();
         alert(res); 
     }; 



 

  $scope.showAdvanced = function(ev, pizza) {

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

      
      $scope.pizza = pizza;
      $scope.mess = "pizza";
      $scope.tab1tittle = pizza.name;
      $scope.ingridients = pizza.ingridients;

      var total = 0;
      for (var i = pizza.ingridients.length - 1; i >= 0; i--) {
        total += pizza.ingridients[i].cost;
      }
      var coefficient = 3;
      var ethCoeff = 613;
      
      $scope.ethCoeff = ethCoeff;
      $scope.totalEth = total / ethCoeff;
      total *= coefficient;
      
      pizza.price = total;
      $scope.total = total;

      $scope.payAll = function(){
       
        for(var i = 0; i < pizza.ingridients.length; i ++){
            var ingridient = pizza.ingridients[i];
            $scope.pay(ingridient.cost, ingridient.provider, ingridient.name);
        }
      };
          
      $scope.pay = function(cost, provider, name){
          
      };
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

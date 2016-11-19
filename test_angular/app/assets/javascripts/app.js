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
    //Double-key ABI:
    //[{"constant":false,"inputs":[],"name":"customerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"providerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
    var abi = [{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
    var web3 = new Web3();
 
    

     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     $scope.accounts = accounts;
     //0x41d4c8178ff0fad76a86fef2188672ac7f8d54f2 (blockchain) - doubleKey
     var contractAddress = "0x5c41628787a20780547bddb64c2fc12429115e7c";
     var contract;
 
     $scope.myToken = accounts[0];
     $scope.myFunds = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase),"ether");
     
      
     
     contract = web3.eth.contract(abi).at(contractAddress);

     $scope.testMethod = function(){      
          
          //var bal = web3.fromWei(web3.eth.getBalance('0x762b3b06026b61f6e23b5d7355fc42421697a5cc '));
         var bal1 = contract.checkBalance.call();
         alert(contract.address + "\n" + bal1);

     };

     $scope.initProviders = function(providersAddresses,providersAmount){
       web3.personal.unlockAccount($scope.myToken,"qbasik007");
            
      contract.init.sendTransaction(providersAddresses,providersAmount,$scope.myToken,{from: web3.eth.coinbase});
      alert(providersAddresses); 
     }; 
     $scope.pay = function(amountOfMoney,ingridientAmount){
      web3.personal.unlockAccount($scope.myToken,"qbasik007");
        var hash = {from: $scope.myToken,to: contractAddress,value: web3.toWei(amountOfMoney, "ether")};
          
        var res = web3.eth.sendTransaction({from: web3.eth.coinbase, to: contractAddress, value: web3.toWei(2,'ether')});          
        contract.pay.sendTransaction(ingridientAmount,{from: web3.eth.coinbase});
        alert(web3.fromWei(res,'ether'));  
     };
     $scope.contractDone = function(){
          web3.personal.unlockAccount($scope.myToken,"qbasik007");
          var res = contract.contractNotDone.sendTransaction({from: web3.eth.coinbase});
          alert(res); 
     }; 
      $scope.warranty = function(amount){
         
          var res = contract.warranty.call(amount);
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

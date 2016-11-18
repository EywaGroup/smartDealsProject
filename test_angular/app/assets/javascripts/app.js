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

//geth --rpc --rpcapi admin,eth,personal,miner  --testnet --rpccorsdomain="*" console
//----------------------------------------------------------------------------------------
    
     var abi =  [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"addr","type":"address"},{"name":"goods","type":"uint256"}],"name":"pay","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tmpAddr","type":"address"}],"name":"search","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address[]"},{"name":"provCount","type":"uint256"},{"name":"mainAcc","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
     var Web3 = require('web3');
     var web3 = new Web3();
     

     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     $scope.accounts = accounts;

     var contractAddress = "0x87a712ce7e30c848f78b1a4f0629f31b0e5f5db1";
     var contract;

     $scope.myToken = accounts[0];
     $scope.myFunds = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase),"ether");
     web3.personal.unlockAccount($scope.myToken,"qbasik007");
      
     
     contract = web3.eth.contract(abi).at(contractAddress);

     $scope.testMethod = function(){

        alert($scope.myFunds + "\n" + contract.address + "\n");

     };

     $scope.initProviders = function(providersAddresses,providersAmount){
      contract.create();
      contract.init(providersAddresses,providersAmount,$scope.myToken);

     }; 
     $scope.pay = function(amountOfMoney,providerAddress,ingridientAmount){

        eth.sendTransaction({from:$scope.myToken,to:contractAddress,value: web3.toWei(amountOfMoney, "ether")})
        contract.pay(amountOfMoney,providerAddress,ingridientAmount);

     };
     $scope.contractDone = function(){

        contract.contractDone();
        
     }; 




//----------------------------------------------------------------------------------------
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

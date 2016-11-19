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


//geth --rpc --rpcapi admin,eth,personal,miner  --testnet --rpccorsdomain="*" console
//----------------------------------------------------------------------------------------
    
     var abi =  [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"addr","type":"address"},{"name":"goods","type":"uint256"}],"name":"pay","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tmpAddr","type":"address"}],"name":"search","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address[]"},{"name":"provCount","type":"uint256"},{"name":"mainAcc","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
     var Web3 = require('web3');
     var web3 = new Web3();
     var eth = web3.eth;
     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = eth.accounts;
     $scope.accounts = accounts;
    //event Deposit(address sender,address _provAddress, uint _value);

      

     var contractAddress = '0x87a712ce7e30c848f78b1a4f0629f31b0e5f5db1';
     var Myco = web3.eth.contract(abi);
     var contract = Myco.at(contractAddress);
     var filter = web3.eth.filter({fromBlock:0, toBlock: 'latest', address: contractAddress, 'topics':['0x' + 
     web3.sha3('pay(uint256,uint256,uint256)')]});
     
     $scope.myToken = eth.coinbase;
     $scope.myFunds = web3.fromWei(eth.getBalance(eth.coinbase),"ether");
     web3.personal.unlockAccount($scope.myToken,"Dtrnjh2917");

     var source = "" + 
    "contract test {\n" +
    "   function multiply(uint a) returns(uint d) {\n" +
    "       return a * 7;\n" +
    "   }\n" +
    "}\n";

      var compiled = web3.eth.compile.solidity(source);
      
    
     $scope.testMethod = function(){
        console.log(compiled); 
        alert($scope.myFunds + "\n" + contract.address + "\n");
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

    $scope.initProviders = function(){
      var a = 2;
      var adr = ["0x9b423036f2324445ab650b4ef883d0d6ede53ca3", "0x75a3c71753c5E9f83c64a028849410f04cF85d95"];
      contract.init(adr, a, $scope.myToken);
    };
     $scope.contractDone = function(){
        contract.contractDone();
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
        image:
          "assets/1.png",
      },
      {
        name: 'Quattro Formaggi',
        price: 300,
        description: 'Very good pizza!',
        id: 2,
        image:
          "assets/1.png",
      },
      {
        name: 'Maltija (Maltese)',
        price: 300,
        description: 'Very good pizza!',
        id: 3,
       image:
          "assets/1.png",
      }
    ];
})();

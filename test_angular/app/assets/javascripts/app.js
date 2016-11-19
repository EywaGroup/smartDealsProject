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
    
     var abi =  [
     {"constant":false,
      "inputs":
        [{"name":"amount","type":"uint256"},
         {"name":"addr","type":"address"},
         {"name":"goods","type":"uint256"}],
         "name":"pay",
         "outputs":[],
         "payable":false,
         "type":"function"},

         {"constant":false,
         "inputs":[],
         "name":"contractDone",
         "outputs":[],
         "payable":true,
         "type":"function"},

         {"constant":false,
         "inputs":[],
         "name":"contractNotDone",
         "outputs":[],
         "payable":true,
         "type":"function"},

         {"constant":false,
         "inputs":
         [{"name":"tmpAddr",
           "type":"address"}],
           "name":"search",
           "outputs":
           [{"name":"",
           "type":"uint256"}],
           "payable":false,
           "type":"function"},

         {"constant":false,
           "inputs":
           [{"name":"provAddrs",
           "type":"address[]"},
           {"name":"provCount",
           "type":"uint256"},
           {"name":"mainAcc",
           "type":"address"}],
           "name":"init",
           "outputs":[],
           "payable":false,
           "type":"function"},

          {"anonymous":false,
           "inputs":
           [{"indexed":false,
           "name":"sender",
           "type":"address"},
            {"indexed":false,
            "name":"_provAddress",
            "type":"address"},
            {"indexed":false,
            "name":"_value",
            "type":"uint256"}],
           "name":"Deposit",
           "type":"event"}];
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

     var source = "pragma solidity ^0.4.0;\n"+ 
"contract SmartDeal {\n" +
"struct Provider{\n" +
"    uint goodsAmount;\n" +
"    uint profit;\n" +
"    address addr;\n" +
"}\n" +
"\n" +
"Provider[] providers;\n" +
"uint provCount = 0;\n" +
"uint totalPay;\n" +
"address clientAddr;\n" +
"event Deposit(address sender,address _provAddress, uint _value);\n" +
"function init(address[] provAddrs, uint provCount,address mainAcc)\n" +
"{\n" +
"    clientAddr = mainAcc;\n" +
"    for(uint i = 0;i<provCount;i++)\n" +
"    {\n" +
"        providers[i].profit = 0;\n" +
"        providers[i].addr = provAddrs[0];\n" +
"        provCount++;\n" +
"    }\n" +
"}\n" +
"function pay(uint amount, address addr,uint goods)\n" +
"{\n" +
"    providers[search(addr)].profit += amount;\n" +
"    providers[search(addr)].goodsAmount += goods;\n" +
"    totalPay += amount;\n"  +
"    Deposit(clientAddr,addr,amount);\n" +
"}\n" +
"function search(address tmpAddr) returns(uint)\n" +
"{\n" +
"    for(uint i = 0;i<provCount;i++)\n" +
"    {\n" +
"        if(providers[i].addr == tmpAddr) return i;\n" +
"    }\n" +
"}\n" +
"function contractDone() payable\n" +
"{\n" +
"    for(uint i = 0;i<provCount;i++)\n" +
"    {\n" +
"      bool a = providers[i].addr.send(providers[i].profit);\n" +
"    }\n" +
"}\n" +
"function contractNotDone() payable\n" +
"{\n" +
"  bool a = clientAddr.send(totalPay);\n" +
"}\n" +
"}\n" +;

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

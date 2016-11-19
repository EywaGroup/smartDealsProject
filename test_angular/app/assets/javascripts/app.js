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
    
     // var abi =  [{"constant":false,
     //  "inputs":
     //    [{"name":"amount","type":"uint256"},
     //     {"name":"addr","type":"address"},
     //     {"name":"goods","type":"uint256"}],
     //     "name":"pay",
     //     "outputs":[],
     //     "payable":false,
     //     "type":"function"},

     //     {"constant":false,
     //     "inputs":[],
     //     "name":"contractDone",
     //     "outputs":[],
     //     "payable":true,
     //     "type":"function"},

     //     {"constant":false,
     //     "inputs":[],
     //     "name":"contractNotDone",
     //     "outputs":[],
     //     "payable":true,
     //     "type":"function"},

     //     {"constant":false,
     //     "inputs":
     //     [{"name":"tmpAddr",
     //       "type":"address"}],
     //       "name":"search",
     //       "outputs":
     //       [{"name":"",
     //       "type":"uint256"}],
     //       "payable":false,
     //       "type":"function"},

     //     {"constant":false,
     //       "inputs":
     //       [{"name":"provAddrs",
     //       "type":"address[]"},
     //       {"name":"provCount",
     //       "type":"uint256"},
     //       {"name":"mainAcc",
     //       "type":"address"}],
     //       "name":"init",
     //       "outputs":[],
     //       "payable":false,
     //       "type":"function"},

     //      {"anonymous":false,
     //       "inputs":
     //       [{"indexed":false,
     //       "name":"sender",
     //       "type":"address"},
     //        {"indexed":false,
     //        "name":"_provAddress",
     //        "type":"address"},
     //        {"indexed":false,
     //        "name":"_value",
     //        "type":"uint256"}],
     //       "name":"Deposit",
     //       "type":"event"}];
     //event Deposit(address sender,address _provAddress, uint _value);
     

     $scope.testMethod = function(){
        alert($scope.myFunds + "\n" + contract.address + "\n");
     };

     $scope.deployContract = function() {
       var Web3 = require('web3');
       var web3 = new Web3();
       var eth = web3.eth;
       web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
       var accounts = eth.accounts;
       var source = "contract Smart { function go(uint i) returns(uint) { return i*10; }}";
       var compiled = eth.comile.solidity(source);
       $scope.myToken = eth.coinbase;
       web3.personal.unlockAccount($scope.myToken,"Dtrnjh2917");
       var abi = compiled.Smart.info.abiDefinition;
       var con = eth.contract(abi);
       var smartContract = con.new({
          from: accounts[0],
          data: smartContract.Smart.code, gas: 2000000},
          function(error, contract) {
            if(!error) {
              if(!contract.address){
                console.log("Sended, please wait. Transaction: " +  contract.transactionHash);
              } else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
              }
            } else {
              console.log(error);
            }
          }
       });
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

           // var web3 = new Web3();
     // var eth = web3.eth;
     // web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     // var accounts = eth.accounts;
     // web3.personal.unlockAccount(eth.coinbase,"Dtrnjh2917");
     // var source = 'pragma solidity ^0.4.0; contract SmartDeal {  struct Provider{   uint goodsAmount;    uint profit;    address addr; } Provider[] providers; uint provCount = 0; uint totalPay; address clientAddr; event Deposit(address sender,address _provAddress, uint _value); function init(address[] provAddrs, uint provCount,address mainAcc) {clientAddr = mainAcc; for(uint i = 0;i<provCount;i++) {providers[i].profit = 0; providers[i].addr = provAddrs[0]; provCount++;}} function pay(uint amount, address addr,uint goods) { providers[search(addr)].profit += amount; providers[search(addr)].goodsAmount += goods; totalPay += amount; Deposit(clientAddr,addr,amount); } function search(address tmpAddr) returns(uint) { for(uint i = 0;i<provCount;i++) { if(providers[i].addr == tmpAddr) return i; }} function contractDone() payable { for(uint i = 0;i<provCount;i++) { bool a = providers[i].addr.send(providers[i].profit); }} function contractNotDone() payable {bool a = clientAddr.send(totalPay);}}'
     // var compiled = web3.eth.compile.solidity(source);
     //  var code = compiled.Multiply7.code;
     //  var abi = compiled.Multiply7.info.abiDefinition;

     //  web3.eth.contract(abi).new({from: "0xae4af6288b97b7e1ce9b3a343ed17aebe6e2c8f3", data: code}, function (err, contract) {
     //  if (!err && contract.address)
     //    console.log("deployed on:", contract.address);
     //  });
  

    $scope.pay = function(){
      contract.pay({"amount":1, "addr": 0x9b423036f2324445ab650b4ef883d0d6ede53ca3, "goods": 1})
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

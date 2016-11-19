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

     

//----------------------------------------------------------------------------------------
  $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.deploy = function(answer) {
     var Web3 = require('web3');
     var web3 = new Web3();
     web3.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     var source = "contract Smart { function go(uint i) returns(uint) { return i*10; }}";
     var compiled = web3.eth.compile.solidity(source);
     console.log(compiled);
     $scope.myToken = web3.eth.coinbase;
     console.log(web3.personal.unlockAccount($scope.myToken,"Dtrnjh2917"));
     var abi = compiled.Smart.info.abiDefinition;
     var con = web3.eth.contract(abi);
     console.log(JSON.stringify(abi));
     var smartContract = con.new({
        from: accounts[0],
        data: compiled.Smart.code, gas: 2000000},
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
        });
     $mdDialog.hide(answer);
    };

    $scope.cancel = function() {
      $mdDialog.hide();
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

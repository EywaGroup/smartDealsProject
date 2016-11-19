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
  var Web3 = require('web3');
  var web3 = new Web3();
  web3.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  var accounts = web3.eth.accounts;
//----------------------------------------------------------------------------------------
  $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.$watch("contractName",
    function(newValue, oldValue) {
      if(newValue != oldValue) {
      console.log(newValue);
      $scope.textName = newValue;
    }
    }, true);

    $scope.deploy = function(answer) {

    // $scope.NameFirst
    // $scope.NameSecond;
    // $scope.AddressOne;
    // $scope.contractText;
    $scope.Password = "Dtrnjh2917";
    // $scope.AdressTwo
    // $scope.Volume
    // $scope.Time
    // $scope.Cost
     var source = 'contract SmartDealDoubleKey { struct Provider { uint goodsAmount; address addr; } address owner; Provider provider; uint provCount = 0; uint amnt = 0; bool custConfirmed = false; bool providerConfirmed = false; event Deposit(address sender,address _provAddress, uint _value); modifier confirmed { if(!(custConfirmed && providerConfirmed)) throw; _; } modifier onlyProvider { if(msg.sender != owner) throw; _; } modifier onlyCustomer { if(msg.sender != provider.addr) throw; _; } function customerConfirm() onlyCustomer { custConfirmed = true; } function providerConfirm() onlyProvider { providerConfirmed = true; } function() payable  { owner = msg.sender; amnt += msg.value; } function warranty(uint warrAmount) returns(bool) { if (amnt>=warrAmount) return true; else return false; } function returnState() returns(uint) { return amnt; } function init(address provAddrs, uint count)  { owner = msg.sender; provider.addr = provAddrs; provCount++;} function pay(uint goods) onlyCustomer payable returns(uint) { provider.goodsAmount += goods;} function checkBalance() returns (uint) { return this.balance; } function contractDone() confirmed payable returns(bool) { bool a = provider.addr.send(amnt); selfdestruct(msg.sender); return a;} function contractNotDone()confirmed payable {selfdestruct(msg.sender);}}';
     var compiled = web3.eth.compile.solidity(source);
     console.log(compiled);
     $scope.myToken = web3.eth.coinbase;
     console.log(web3.personal.unlockAccount($scope.myToken,$scope.Password));
     var abi = compiled.SmartDealDoubleKey.info.abiDefinition;
     var con = web3.eth.contract(abi);
     console.log(JSON.stringify(abi));
     var smartContract = con.new({
        from: accounts[0],
        data: compiled.SmartDealDoubleKey.code, gas: 2000000},
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

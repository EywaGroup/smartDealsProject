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
          $scope.newContract = {};

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.deploy = function(address,count) {

    // $scope.NameFirst
    // $scope.NameSecond;
    // $scope.AddressOne;
    // $scope.contractText;
    $scope.Password = "Dtrnjh2917";
    // $scope.AdressTwo
    // $scope.Volume
    // $scope.Time
    // $scope.Cost
    var contractName = 'SmartDealDoubleKey';
     var source ='contract SmartDealDoubleKey { struct Provider { uint goodsAmount; address addr; } address owner; Provider provider; uint provCount = 0; uint amnt = 0; bool custConfirmed = false; bool providerConfirmed = false; event Deposit(address sender,address _provAddress, uint _value); modifier confirmed { if(!(custConfirmed && providerConfirmed)) throw; _; } modifier onlyProvider { if(msg.sender != owner) throw; _; } modifier onlyCustomer { if(msg.sender != provider.addr) throw; _; } function customerConfirm() onlyCustomer { custConfirmed = true; } function providerConfirm() onlyProvider { providerConfirmed = true; } function() payable  { owner = msg.sender; amnt += msg.value; } function warranty(uint warrAmount) returns(bool) { if (amnt>=warrAmount) return true; else return false; } function returnState() returns(uint) { return amnt; } function init(address provAddrs, uint count)  { owner = msg.sender; provider.addr = provAddrs; provCount++;} function pay(uint goods) onlyCustomer payable returns(uint) { provider.goodsAmount += goods;} function checkBalance() returns (uint) { return this.balance; } function contractDone() confirmed payable returns(bool) { bool a = provider.addr.send(amnt); selfdestruct(msg.sender); return a;} function contractNotDone()confirmed payable {selfdestruct(msg.sender);}}';
     var compiled = web3.eth.compile.solidity(source);
     console.log(compiled);
     $scope.myToken = web3.eth.coinbase;
     console.log(web3.personal.unlockAccount($scope.myToken,$scope.Password));
     var abi = compiled[contractName].info.abiDefinition;
     // var abi = [{"constant":false,"inputs":[],"name":"customerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"providerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
     var con = web3.eth.contract(abi);
     var code = "0x60606040526000600381905560048190556005805461ffff191690556102b690819061002a90396000f3606060405236156100775760e060020a60003504631533fee181146100b25780632ef95086146100d5578063399ae7241461010157806340950e641461016057806358b45557146101875780636a8f0ee414610196578063c290d691146101b9578063c5d207ed146101dd578063c71daccb146101fd575b6000805473ffffffffffffffffffffffffffffffffffffffff19166c010000000000000000000000003381020417905560048054340190555b005b34610002576100b060025433600160a060020a0390811691161461023b57610002565b610215600554600090819060ff1680156100f65750600554610100900460ff165b151561024a57610002565b3461000257600080546c0100000000000000000000000033810281900473ffffffffffffffffffffffffffffffffffffffff199283161790925560028054600435840293909304929091169190911790556003805460010190556100b0565b6100b060055460ff16801561017c5750600554610100900460ff165b151561028357610002565b34610002576102296004545b90565b34610002576100b060005433600160a060020a0390811691161461028f57610002565b61022960043560025460009033600160a060020a039081169116146102a057610002565b34610002576102156004356004546000908290106102ae575060016102a9565b3461000257610229600160a060020a03301631610193565b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b6005805460ff19166001179055565b600254600454604051600160a060020a039092169181156108fc0291906000818181858888f19350505050905033600160a060020a0316ff5b33600160a060020a0316ff5b6005805461ff001916610100179055565b60018054830190555b919050565b5060006102a956";
     console.log(JSON.stringify(abi));
     console.log(JSON.stringify(compiled[contractName].code));
     var smartContract = null;

     smartContract = con.new({
        from: accounts[0],
        data: code, gas: 2000000},
        function(error, contract) {
          if(!error) {
            if(!contract.address){
              console.log("Sended, please wait. Transaction: " +  contract.transactionHash);
            } else {
              console.log("Contract mined! Address: " + contract.address);
              console.log(contract);
              console.log(address);
              contract.init.sendTransaction(web3.toHex('0x9b423036f2324445ab650b4ef883d0d6ede53ca3'),1,{from: $scope.myToken});
              console.log(contract.checkBalance());
              $mdDialog.hide();
            }
          } else {
            console.log(error);
          }
        });          

    //0x9b423036f2324445ab650b4ef883d0d6ede53ca3
    //

   
       /* function(error, contract) {
          if(!error) {
            if(!contract.address){
              console.log("Sended, please wait. Transaction: " +  contract.transactionHash);
            } else {
              console.log("Contract mined! Address: " + contract.address);
              console.log(contract);
              $scope.contractAddress = contract.address;
              $scope.contract = contract;
            }
          } else {
            console.log(error);
          }
        }*/

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

(function(){
var app = angular.module('smartDeals', ['ngMaterial','ngMessages']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

app.controller('smartDealsController',function($scope,$mdDialog){
 
  $scope.company1 ;
  $scope.company2 ;
  $scope.address1 ;
  $scope.address2 ;
  $scope.volume;
  $scope.date;
  $scope.cost;
  $scope.warrantyLimit;

  $scope.contracts= [];

  $scope.addContract = function(name1, type1, company1_1, company2_1, 
    address1_1, address2_1, volume_1, date_1, cost_1, warrantyLimit_1) {

    $scope.contracts.push({
      name: name1,
      type: type1,
      company1: company1_1,
      company2: company2_1,
      address1: address1_1,
      address2: address2_1,
      volume: volume_1,
      date: date_1,
      cost: cost_1,
      warrantyLimit: warrantyLimit_1
    });
  }

  $scope.createContract = function(){
    alert($scope.cost);
  };

  this.pizzas = pizzas;
  $scope.pizzas = pizzas;
    var variable;
    //Double-key ABI:
    //[{"constant":false,"inputs":[],"name":"customerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"providerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];


 

  $scope.showAdvanced = function(ev, pizza) {

    $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {

        var abiFirst = [{"constant":false,"inputs":[],"name":"check1","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"money","type":"uint256"},{"name":"addr","type":"address"},{"name":"goods","type":"uint256"},{"name":"iter","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tmpAddr","type":"address"}],"name":"search","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"},{"name":"iter","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"check2","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
      var abiSecond = [{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];
      var abiThird = [{"constant":false,"inputs":[],"name":"customerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"providerConfirm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];



    var web3 = new Web3();   

     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     $scope.accounts = accounts;
     //0x41d4c8178ff0fad76a86fef2188672ac7f8d54f2 (blockchain) - doubleKey
     

     var firstContractAddress = "0x96340dfb3eff229b758f95f1365241411609ec9c"; 
     var secondContractAddress = "0x3212f15e6eed354ecc013e7b41454384badef96c";
     var thirdContractAddress = "0x2f95648a1965db9e60f827999e40108d1159222e";
      $scope.firstContract;
      $scope.secondContract;
      $scope.thirdContract;
 
     $scope.myToken = accounts[0];
     $scope.myFunds = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase),"ether");
     
      
     
      $scope.firstContract = web3.eth.contract(abiFirst).at(firstContractAddress);
      $scope.secondContract = web3.eth.contract(abiFirst).at(secondContractAddress);
      $scope.thirdContract = web3.eth.contract(abiFirst).at(thirdContractAddress);

     $scope.testMethod = function(contr){                
          //var bal = web3.fromWei(web3.eth.getBalance('0x762b3b06026b61f6e23b5d7355fc42421697a5cc '));
         var bal1 = contr.checkBalance.call();
         alert(contr.address + "\n" + bal1);

     };

     $scope.initProviders = function(contr,providerAddress,providersAmount,iter){

       web3.personal.unlockAccount($scope.myToken,"qbasik007");            
       //contr.init.sendTransaction(providerAddress,providersAmount,iter,{from: web3.eth.coinbase});      
       contr.init.sendTransaction({from: web3.eth.coinbase});      

     }; 
     $scope.payNew = function(contr,provAddr,amountOfMoney,ingridientAmount,iter){
        web3.personal.unlockAccount($scope.myToken,"qbasik007");      

        web3.eth.sendTransaction({from: web3.eth.coinbase, to: contr.address, value: web3.toWei(1,'ether')});          
        contr.pay.sendTransaction(web3.toWei(0.1,'ether'),provAddr,ingridientAmount,iter,{from: web3.eth.coinbase});
         
     };
     $scope.contractNotDone = function(contr){
          web3.personal.unlockAccount($scope.myToken,"qbasik007");
          var res = contr.contractNotDone.sendTransaction({from: web3.eth.coinbase});
          alert(res); 
     }; 
     $scope.contractDone = function(contr){       
          web3.personal.unlockAccount($scope.myToken,"qbasik007");
          var res = contr.contractDone.sendTransaction({from: web3.eth.coinbase});
          alert(res); 
     };
      $scope.warranty = function(contr,amount){
         
          var res = contr.warranty.call(amount);
          alert(res); 
     }; 

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
      var providers = ["0x353e3437ce2aa167f957ea4d3accba6d2e328164","0x5034ded7f8c496465b11d1106e0c17aca7f00f09","0x6d7abef65264b286dc7d771a0226543c3683a9cf","0x1873960d5cd3e84672313aed4794d9664ee6ad94"];

      $scope.payAll = function(){

        
         $scope.testMethod($scope.firstContract);
     /*for(var i = 0; i < pizza.ingridients.length; i ++){
           //$scope.initProviders($scope.firstContract,1,i);            
        }
        for(var i = 0; i < pizza.ingridients.length; i ++){
          //alert(pizza.ingridients[i].name);            
            var ingridient = pizza.ingridients[i];
            $scope.payNew($scope.firstContract,providers[i],ingridient.cost,1,i);            
        }*/
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




$scope.showAdvanced2 = function(ev, pizza, url) {

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

        templateUrl: 'warranty_contract/index',
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







$scope.showAdvanced3 = function(ev, pizza, url) {

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
          alert(url);
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

        templateUrl: 'double_key_contract/index',
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

$scope.showDialogByUrl = function(ev, contract, url) {
      $mdDialog.show({
        controller: function DialogController($scope, $mdDialog) {

//---------------------------------------------

      /*var abiSecond = [{"constant":false,"inputs":[],"name":"contractDone","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"provAddrs","type":"address"},{"name":"count","type":"uint256"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contractNotDone","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"returnState","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"goods","type":"uint256"}],"name":"pay","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"warrAmount","type":"uint256"}],"name":"warranty","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"_provAddress","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}];



    var web3 = new Web3();   

     web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
     var accounts = web3.eth.accounts;
     $scope.accounts = accounts;
     //0x41d4c8178ff0fad76a86fef2188672ac7f8d54f2 (blockchain) - doubleKey
     

     var secondContractAddress = "0x3212f15e6eed354ecc013e7b41454384badef96c";
      $scope.secondContract;
 
     $scope.myToken = accounts[0];
     $scope.myFunds = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase),"ether");
     
      
     
      $scope.secondContract = web3.eth.contract(abiFirst).at(secondContractAddress);

     $scope.testMethod = function(contr){                
          //var bal = web3.fromWei(web3.eth.getBalance('0x762b3b06026b61f6e23b5d7355fc42421697a5cc '));
         var bal1 = contr.checkBalance.call();
         alert(contr.address + "\n" + bal1);

     };

     $scope.initProviders = function(contr,providerAddress,providersAmount){

       web3.personal.unlockAccount($scope.myToken,"qbasik007");            
       contr.init.sendTransaction(providerAddress,providersAmount,{from: web3.eth.coinbase});      
       contr.init.sendTransaction({from: web3.eth.coinbase});      

     }; 
     $scope.payNew = function(contr,ingridientAmount){
        web3.personal.unlockAccount($scope.myToken,"qbasik007");      
        web3.eth.sendTransaction({from: web3.eth.coinbase, to: contr.address, value: web3.toWei(1,'ether')});          
        contr.pay.sendTransaction(ingridientAmount,{from: web3.eth.coinbase});
         
     };
     $scope.contractNotDone = function(contr){
          web3.personal.unlockAccount($scope.myToken,"qbasik007");
          var res = contr.contractNotDone.sendTransaction({from: web3.eth.coinbase});
          alert(res); 
     }; 
     $scope.contractDone = function(contr){       
          web3.personal.unlockAccount($scope.myToken,"qbasik007");
          var res = contr.contractDone.sendTransaction({from: web3.eth.coinbase});
          alert(res); 
     };
      $scope.warranty = function(contr,amount){
         
          var res = contr.warranty.call(amount);
          alert(res); 
     }; */
//---------------------------------------------


          $scope.hide = function() {
              $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };

          contract.moneyInContract = 6999//$scope.testMethod();
          contract.progress = contract.moneyInContract * 100 / contract.cost;
          contract.contractDone = false;
          contract.warrantyPayed = false;
          contract.customerConfirmed = false;
          contract.providerConfirmed = false;

          if (contract.type != "warranty"){
            contract.customerConfirmed = true;
            contract.providerConfirmed = false;
          } else {
            

            contract.warrantyPayed = false;//$scope.warranty($scope.secondContract,3);

            
          }
          
          $scope.currentContract = contract;
          
        },
        templateUrl: url,
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

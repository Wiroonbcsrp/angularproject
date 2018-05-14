(function () {
  'use strict';

  angular
    .module('angularproject')
    .controller('AboutController', MainController);


  function MainController($timeout, webDevTec, toastr, $http) {
    var vm = this;

    vm.myvalue = 'test';
    vm.myobject = [{'name': 'aun'}, {'age': '22'}];


   var requestitem = function(){
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:8000/book/'
        }).then(function successCallback(response) {
            console.log('success');
            console.log(response);
            vm.myvalue = response.data;


        }, function errorCallback(response) {
            console.log('error');
            alert('api error');

      });
    };
   requestitem();
  }
})();



angular.module("test", []);
angular.module("test")
	.controller("MyController", ["$scope", function($scope){
		$scope.fee = function(){
			alert("8888");
		}
	}]);







/*

angular.module("test", [])
.component('myDir', {
    templateUrl: "subView.html",
    controller: ["$http", function MyDirController($http) {
    	//alert("before load data");
    	var dta = this;
    	dta.order = "age";
    	dta.query = 'r';
      $http.get("data.json").then(function(response){
      	//alert("load data");
      	dta.phones = response.data;
      });
      //alert("after load data");
    }]
  })
.controller("MyController", function(){
})
;

*/
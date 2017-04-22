

angular.module('CRUDapp',[])
.controller('CRUDController', function($scope,$http) {

	console.log('gopal')
	

	$scope.initialize = function(){

		$scope.details=[];
	    $scope.firstName ="kmkmk";
	    $scope.lastName = "";
	    $scope.password= "";
	    $scope.email = "";
	    $scope.details="";
	    $scope.Message ="";
	};

    $scope.getDetails = function(){
    	$http({
	        method : "GET",
	        url : "http://localhost:3000/getDetails"
	    }).then(function mySucces(response) {
	    	console.log(response);
	        $scope.details = response.data;
	    }, function myError(response) {
	        $scope.details = "error fetching the details";

	    });
    };

    $scope.initialize();
	$scope.getDetails();


    $scope.addDetails = function(){
    	console.log($scope.formData);
    	$http.post("http://localhost:3000/addDetails",$scope.formData)
    	.then(
    		function mySucces(response) {
	        //$scope.Message = response.data;
	    	}, 
	    	function myError(response) {
	        $scope.Message = "error adding the details";

	    });
    };
});
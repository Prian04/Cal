var app = angular.module("Webapp",[]);
var calculatorModule = angular.module('calculatorModule', []);
calculatorModule.controller("Webcal", ['$scope',function Webcal($scope){
	calculatorModel = {
			result: 0, 
			operation: "",
			currentNumber: "0",
			currentDisplay: "",
			mul: "1",
	        div: "1",
	        //sub: "",
			reset: function() {
				this.result = 0; 
				this.operation = "";
				this.currentNumber = "0";
				this.currentDisplay = "" ;
				this.mul = "1";
				this.div = "1";
				//this.sub ="";
			},
			setOperation: function(operationToSet) {
				this.operation = operationToSet;
				if(calculatorModel.currentNumber === "0") {
					this.currentDisplay += "0";
					
				}
				
				this.currentDisplay += " " + this.operation + " ";
				this.calculate();
				
				this.currentNumber = "";
			},
			
			calculate: function() {

				switch(this.operation) {
					case "+":
						this.result = this.result + parseInt(this.currentNumber);
						break;
					case "-":
						//this.result = this.result - parseInt(this.currentNumber);
						this.result= parseInt(this.currentNumber) - this.result;
						break;
					case "*":
						//this.result = this.result * parseInt(this.currentNumber);
						this.mul= parseInt(this.currentNumber) * this.mul;
						break;
					case "/":
						this.div= parseInt(this.currentNumber) / this.div;
						//this.result = this.result / parseInt(this.currentNumber);
						break;	
				}
			}			
			
		};
			//calculate: function(result) {
                
				//this.result = function() {
		          /*  if (this.operation == '+') {
		                this.result= this.result + parseInt(this.currentNumber);
		                return result
		            }
		            if (this.operation == '-') {
		            	//this.result= this.result - parseInt(this.currentNumber);
		            	this.result= parseInt(this.currentNumber) - this.result;
		                return result
		            }
		            if (this.operation == '*') {
		            	this.result= this.mul * parseInt(this.currentNumber);
		                return result
		            }
		            if (this.operation == '/') {
		            	this.result= this.result / parseInt(this.currentNumber);
		                return result
		            }
		       // };*/
			//}			
			
		//};
	
	 $scope.calculator = calculatorModel;
	 $scope.numberButtonClicked = function(clickedNumber) {
			if(calculatorModel.currentNumber === "0") {
				calculatorModel.currentNumber = "";
				calculatorModel.currentDisplay = "";
			}
			
			calculatorModel.currentNumber += clickedNumber;
			calculatorModel.currentDisplay += clickedNumber;
		};
		
		$scope.operationButtonClicked = function(clickedOperation) {
			calculatorModel.setOperation(clickedOperation);				
		};
		$scope.enterClicked = function() {
			calculatorModel.calculate();
			calculatorModel.currentDisplay = calculatorModel.result;
		};
		$scope.subClicked = function() {
			calculatorModel.calculate();
			calculatorModel.currentDisplay = calculatorModel.sub;
		};
		$scope.mulClicked = function() {
			calculatorModel.calculate();
			calculatorModel.currentDisplay = calculatorModel.mul;
		};
		$scope.divClicked = function() {
			calculatorModel.calculate();
			calculatorModel.currentDisplay = calculatorModel.div;
		};
		$scope.resetClicked = function() {
			calculatorModel.reset();
		};
	
}]);
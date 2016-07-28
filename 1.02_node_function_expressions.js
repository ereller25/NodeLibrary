//normail function statement
function sayHi() {
	console.log('hi');
}

//function expression
var sayBye = function(){   //anonymous function
	console.log('bye');
};

//pass from one function to another, and call that function

function callFunction(fun){
	fun();
}
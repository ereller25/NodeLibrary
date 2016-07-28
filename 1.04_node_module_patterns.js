//Module Patterns - to make 
	// see 1.3
var counter = function (arr){
	return 'There are ' + arr.length + ' elements in this array';
};


var adder = function(a,b){
	return `The sum of the 2 numbers is ${a+b}`;  //no need to concatonate the string with this `` (above tilda)
};


var pi = 3.142;
//to call all three outside of the module where it's required
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;


// to call the module filename.adder or filename.counter
// to combine modules: console.log(filename.adder(stuff.pi, 5));
 
//can simplify:
// module.exports.adder = function(a,b){
//	return `The sum of the 2 numbers is ${a+b}`; };

//another way
module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};





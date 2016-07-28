var events = require('events');
var util = require('util'); //Allows us to inherit certain Node.JS objects
//Event emitter
//create custom events and react to the events
var myEmitter = new events.EventEmitter();


//We listened out for an event
myEmitter.on('someEvent', function(message){
	console.log(message);
});

//Emitted the event and passed the message
myEmitter.emit('someEvent', 'the event was emitted');



///Another example using util

//CREATE AN OBJECT with a constructor
var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var paul = new Person('Paul');
var john = new Person('Ringo');

//store these people in an array

var people = [james, paul, john];

people.forEach(function(person){
	person.on('speak', function(message){
		console.log(person.name + ' said:' + message);

	});
});


james.emit('speak', 'hey dudes');
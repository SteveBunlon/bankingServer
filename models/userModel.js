var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');

var incoming = new mongoose.Schema({
	name: {type: String, required: true},
	amount: {type: Number, required: true, min: 0}
})

var outgoing = new mongoose.Schema({
	name: {type: String, required: true},
	amount: {type: Number, required: true, min: 0}
})

var user =  new mongoose.Schema({
	firstName: {type: 'string', required: true},
	lastName: {type: 'string', required: true},
	password: {type: 'string', required: true},
	incomings: [incoming],
	outgoings: [outgoings]
})

user.pre('save', function(next){

})

module.exports = mongoose.model('User', user);
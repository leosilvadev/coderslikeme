module.exports = function(app){
	
	var mongodb = require('../objects/mongo_connect')(),
		 Schema = require('mongoose').Schema;

	var role = Schema({
		name: {type:String, required:true}
	});

	var user = Schema({
		name: {type:String, required:true},
		username: {type:String, required:true},
		password: {type:String},
		avatar: {type:String, required:false},
		roles: [role]
	});

	return mongodb.model('users', user);

};

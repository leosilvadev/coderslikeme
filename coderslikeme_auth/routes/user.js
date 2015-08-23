module.exports = function(app){

	var accepts = app.middlewares.accepts;
	var auth = app.middlewares.authorization;
	var userCtlr = app.controllers.user;
	app.post('/users', accepts.json, userCtlr.register);	
	app.get('/users', auth.authenticated, accepts.json, userCtlr.all);

};

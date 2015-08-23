module.exports = function(app){

	var tokenCtrl = app.controllers.token;
	app.get('/token', tokenCtrl.generate);

};

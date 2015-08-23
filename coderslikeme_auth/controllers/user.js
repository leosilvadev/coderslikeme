module.exports = function(app){

	var User = app.models.user;

	var UserController = {
	
		register: function(req, res){
			console.log(req.body);
			User.create(req.body, function(err, user){
				if(err) {
					res.status(400).json({message: err});
				} else {
					res.status(201).json(user);
				}
			}); 
		},

		all: function(req, res){
			User.find(function(err, users){
				res.status(200).json(users);
			});
		}

	};

	return UserController;

};

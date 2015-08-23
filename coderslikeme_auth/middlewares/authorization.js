module.exports = function(app){

	var Authorization = {
		authenticated: function(req, res, next){
			if(req.isAuthenticated()) {
				return next();
			} else {
				res.status(401).json("No permission");
			}
		}	
	};

	return Authorization;	

};

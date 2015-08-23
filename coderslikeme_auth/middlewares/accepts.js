module.exports = function(app){

	var Accepts = {
	
		json: function(req, res, next){
			var type = req.headers['content-type'];
			if(type==='application/json') {
				return next();
			
			} else {
				res.status(415).end();

			}
		}

	};

	return Accepts;

};

module.exports = function(app){

	var User = app.models.user;
	var Role = app.models.r;

	var GithubHandler = {
		onSuccess: function(accessToken, refreshToken, profile, done){
			User.findOne({username: profile.username}, function(err, user){
				if(user) {
					return done(err, user);

				} else {
					user = new User({
						name: profile.displayName,
						username: profile.username,
						avatar: profile._json.avatar_url,
						roles: [{name:'USER'}]
					});
					user.save(function(err){
						if(err) console.log(err);
						return done(err, user);
					});

				}
			});
		}
	};

	return GithubHandler;

};

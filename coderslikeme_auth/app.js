var express = require('express'),
	 load = require('express-load'),
	 bodyParser = require('body-parser'),
	 app = express(),
	 passport = require('passport'),
	 GitHubStrategy = require('passport-github').Strategy,
	 GitHubConfig = require('./config/github.json');

app.use(bodyParser.json());

load('models')
	.then('handlers')
	.then('middlewares')
	.then('controllers')
	.then('routes')
	.into(app);

passport.serializeUser(function(user, done){
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	done(null, obj);
});

passport.use(new GitHubStrategy({
	clientID: GitHubConfig.clientId,
	clientSecret: GitHubConfig.clientSecret,
	callbackURL: GitHubConfig.successCallbackUrl

}, app.handlers.github.onSuccess));


app.disable('x-powered-by');
app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/github', passport.authenticate('github'), function(req, res){
});

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login'}),
		 function(req, res){
			res.redirect('/');
		 });

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

app.listen(3000, function(){
	console.log('CodersLikeMe online...');
});

module.exports = app;

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const Clients = require('../models/users');


passport.serializeUser(function(client, done) {
    done(null, client); // uses _id as idFieldd
});

passport.deserializeUser(function(id, done) {
    Clients.findById(id, done); // callback version checks id validity automatically
});

// done(null, user)
// OR
// done(null, false, { message: <error message> })  <- 3rd arg format is from built-in messages of strategies
passport.use(new LocalStrategy({
        usernameField: 'login', // 'username' by default
        passwordField: 'password'
    },
    function(login, password, done) {
        Clients.findOne({ login: login }, function (err, client) {
            if (err) {
                return done(err);
            }
            if (!client || !client.checkPassword(password)) {
                // don't say whether the user exists
                return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
            }
            return done(null, client._id);
        });
    }
));


module.exports = passport.initialize();

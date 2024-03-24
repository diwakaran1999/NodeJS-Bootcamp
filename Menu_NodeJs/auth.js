const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');

passport.use(new LocalStrategy(async (newuser, password, done) => {
    //authentication logic
    try {
        
        const user = await Person.findOne({ username: newuser });
        if (!user) {
            return done(null, false, 'No User Found');
        }
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, 'No User Found');
        }
    } catch (error) {
        return done(error);
    }

}));

module.exports = passport;
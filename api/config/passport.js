const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`, // this is in routes/auth.js
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      let isRegistration;
      if(request.session.register){ // get custom flag
        isRegistration = request.session.register;
      }else{
        isRegistration = true;
      }

      try {
        const user = {
          googleId: profile.id,
          fullName: profile.displayName,
          email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : "",
          username: profile.name.givenName,
          password: profile.id,
          register: Boolean(isRegistration), 
        };
      
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);




// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:8800/api/auth/google/callback", // this is in routes/auth.js
//       passReqToCallback: true,
//     },
//     async (request, accessToken, refreshToken, profile, done) => {
//       console.log("GoogleStrategy's async function accessed -->");
//       let isRegistration;
//       if(request.session.register){ // get custom flag
//         console.log("register flag in strategy: ", request.session.register);
//         isRegistration = request.session.register;
//       }else{
//         console.log("register flag in strategy not found");
//         isRegistration = true;
//       }

//       try {

//         // Check if the user already exists in your database
//         let user = await User.findOne({ googleId: profile.id });

//         if (!user) {
//           // If the user doesn't exist, create a new user
//           user = new User({
//             googleId: profile.id,
//             fullName: profile.displayName,
//             email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : "",
//             username: profile.name.givenName,
//             password: profile.id,
//           });
//           await user.save();
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );


// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:8800/api/auth/google/callback", // this is in routes/auth.js
//       passReqToCallback: true,
//     },
//     async (request, accessToken, refreshToken, profile, done) => {
//       console.log("GoogleStrategy's async function accessed -->");
//       let isRegistration;
//       if (request.session.register) {
//         // get custom flag
//         console.log("register flag in strategy: ", request.session.register);
//         isRegistration = request.session.register;
//       } else {
//         console.log("register flag in strategy not found");
//         isRegistration = true;
//       }

//       try {
//         if (isRegistration) {
//           // Wants to register using google OAuth
//           let user = await User.findOne({ googleId: profile.id });

//           if (!user) {
//             // If the user doesn't exist, create a new user
//             user = new User({
//               googleId: profile.id,
//               fullName: profile.displayName,
//               email:
//                 profile.emails && profile.emails.length > 0
//                   ? profile.emails[0].value
//                   : "",
//               username: profile.name.givenName,
//               password: profile.id,
//             });
//             await user.save();
//           } else {
//             // user already exists.
//             res
//               .status(409)
//               .json({
//                 sucess: false,
//                 message: "User already exists, try logging in.",
//               });
//           }
//         } else {// wants to login using google OAuth
//           res.redirect(`/api/auth/gettokenforgoogle?googleId=${profile.id}`);
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

module.exports = passport;

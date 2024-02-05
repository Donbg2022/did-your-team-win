const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function(next) {
  const user = this;

  // Only hash the password if it's modified or a new user
  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // Hash the password using the generated salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // Override the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema)
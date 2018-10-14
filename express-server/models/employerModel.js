const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

/**
 * construct an employer model
 */
const employerSchema = new Schema({
    employerId: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    }
});

/**
 * bcrypt is an npm package that hashes passwords
 */
employerSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        // salt helps with prepending a string to an entered password so it becomes harder
        // to brute-force passwords.
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                // if no errors, store hash password in DB
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// Loads hash from the DB and compares using comparePassword if it matches a post request from client
employerSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

/**
 * store employer schema into another model
 */
const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;
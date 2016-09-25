var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String,required:'{PATH} is required!'}
    , lastName: {type: String,required:'{PATH} is required!'}
    , username: {type: String, unique:true,required:'{PATH} is required!'}
    , salt: {type: String,required:'{PATH} is required!'}
    , hashed_pwd: {type: String,required:'{PATH} is required!'}
    , roles: [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
}
var User = mongoose.model('User', userSchema);
exports.createDefaultUsers = function () {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'through_stacks');
            User.create({
                firstName: 'Anand'
                , lastName: 'Mutyala'
                , username: 'through_stacks'
                , salt: salt
                , hashed_pwd: hash
                , roles: ['admin']
            });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'rver');
            User.create({
                firstName: 'Rishabh'
                , lastName: 'Verma'
                , username: 'rver'
                , salt: salt
                , hashed_pwd: hash
                , roles: []
            });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'kshek');
            User.create({
                firstName: 'Kunal'
                , lastName: 'Shekhar'
                , username: 'kshek'
                , salt: salt
                , hashed_pwd: hash
            });
        }
    });
}
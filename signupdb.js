var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, {timestamps: true} );

    const User = mongoose.model('User' , userSchema)

    module.exports = User;
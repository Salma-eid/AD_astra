var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var userSchema = new Schema(
    {
        
        loginemail: {
            type: String,
            required: true
        },
        loginpassword: {
            type: String,
            required: true
        }
    }, {timestamps: true} );

    const User2 = mongoose.model('User2' , userSchema)

    module.exports = User2;
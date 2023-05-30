var express = require('express');
var app = express();
const mongoose = require('mongoose');
db_URI='mongodb+srv://salma123:12345@myfirstdatabase.ouetb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const User = require('./signupdb');
const User2 = require('./logindb');
mongoose.connect(db_URI)
.then((result) => {app.listen(8080); console.log("Connected to the Database")})
.catch((err)=>{console.log("Error has occurred"); console.log(err)})
app.set('view engine' , 'ejs');
app.get('/home' , (req , res) =>
{
   User.find()
        .then((result) =>
        {
            res.render('../views/home' , {students : result})
        })
        .catch((err)=>{console.log(err)})

});
app.use(express.urlencoded());
app.get('/' , (req , res) =>
{
   res.redirect('/login');
});

app.get('/login',(req,res)=>
{
   res.render('../views/login');
});
app.get('/subjects/computer_courses' , (req , res) =>
{
   res.render('../views/subjects/computer_courses');
});
app.post('/signupdb' , (req , res)=>
{
    var user = User(req.body);
    
    user.save()
        .then((result) => {
           res.redirect('/home');
         })
        .catch((err)=>{console.log(err);})
});
app.post('/logindb' , (req , res)=>
{
    const user2 = User2(req.body)   
    user2.save()
        .then((result) => {
         User2.find()
         .then((result2) =>
         {
            User.find()
        .then((result1) =>
        {
            res.render('../views/confirm', {res1 : result1 , res2 : result2 }) 
          //result[result.length-1].loginid= JSON.stringify(result1._id)
        })
        .catch((err)=>{console.log(err)})
            
         })
         .catch((err)=>{console.log(err)})
         })
        .catch((err)=>{console.log(err);})
});

app.use(express.static(__dirname + '/views'));
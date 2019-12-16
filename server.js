const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UserDB', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
const User = mongoose.model('User', UserSchema);

// create an object that contains methods for mongoose to interface with MongoDB
app.post('/users', function(req, res) {
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.save()
    .then(newUserData => console.log('user created: ', newUserData))
    .catch(err => console.log(err));

  res.redirect('/');
})
app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});


app.get('/', (request, response) => {
   response.send("Hello Express");
});

app.listen(8000, () => console.log("listening on port 8000"));

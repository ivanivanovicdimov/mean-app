const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fighterarenaDB', { useNewUrlParser: true },{ useUnifiedTopology: true } );

const FighterSchema = new mongoose.Schema({
    name:{type:String, unique:[true, 'That name already exists'], required:[true, 'Must enter a name'], minlength:[3, 'Name must be longer than 3 characters']},
    type:{type:String, required:[true, 'Must enter a type'], minlength:[3, 'Type must be longer than 3 characters']},
    desc:{type:String, required:[true, 'Must enter a description'], minlength:[3, 'Description must be longer than 3 characters']},
    likes:Number,
    skills:{s1:String, s2:String, s3:String},


}, {timestamps:true})
//connect
module.exports = mongoose.model('Fighters', FighterSchema);
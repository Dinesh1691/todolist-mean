var mongoose = require("mongoose");
var TodoSchema = mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        process:{
            type:String,
            required:true
        }
});

module.exports = mongoose.model('todoList',TodoSchema);
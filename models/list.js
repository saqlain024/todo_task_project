const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
    description: {
        type : String,
        required : true
    },
    date: {
        type : String,
        required : true
    },
    category: {
        type : String,
        required : true
    }
});

const TodoList = mongoose.model('TodoList', TodoListSchema);

module.exports = TodoList;
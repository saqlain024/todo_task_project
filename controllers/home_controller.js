const db = require('../config/mongoose');
const TodoList = require('../models/list');  //database as todolist


//this function is uesd to display the content
module.exports.home = function(req, res) {
    
    TodoList.find( {}, function(err, tasks) {       // for specific -> use this {name:'Rudransh'} instead of {}
            if(err) {
                console.log('error in fetching contacts from ');
                return;
            }
    
            return res.render('home', {
                title : 'Todo List',
                task_List : tasks   // note naming convention
        
            });
        });
    }
    

// this function is uesd to creating or storing a new list
module.exports.create_task =  function(req, res) { 

    TodoList.create({
        description : req.body.description,
        date : req.body.date,
        category: req.body.category,

    }, function(err, newTask){
        if(err) {
            console.log('error in creating a task !');
            return;
        }

        console.log('*******', newTask);
        return res.redirect('back');
    });
};


//this function is uesd to deleting the task
module.exports.delete_task = function(req, res){
    let id = req.query.id;

    TodoList.findByIdAndDelete( id, function (err) {
        if(err) {
            console.log('error in deleting the object from database');
            return;
        }

        return res.redirect('back');
    })  
};




//module.exports.actionName = function(req, res) { }

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// //Remove all record
// Todo.remove({}).then((result) => {
//     console.log(result);
// })

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: 12312312

}).then(() => {
    
})
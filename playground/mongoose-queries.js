const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5ab272185eb7cf10e2bce43a11';
//
// if (!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id,
// })
// 	.then((todos) => {
// 		console.log('todos: ', todos);
// 	});
//
// Todo.findOne({
// 	_id: id,
// })
// 	.then((todo) => {
// 		console.log('todo: ', todo);
// 	});

// Todo.findById(id)
// 	.then(todo => {
// 		if (!todo) {
// 			return console.log('id not found');
// 		}
// 		console.log('todo by id: ', todo);
// 	})
// .catch(e => {
// 	console.log('e: ', e);
// });

const userId = '5ab2723f5eb7cf10e2bce43b';

User.findById(userId)
	.then(user => {
		if (!user) {
			return console.log('Unable to find user');
		}
		console.log('user: ', user);
	})
	.catch(e => {
		console.log('e: ', e);
	});
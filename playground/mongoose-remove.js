const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({})
// 	.then(result => {
// 		console.log('result: ', result);
// 	});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ab36cd9a3210f17a3246df6'})

Todo.findByIdAndRemove('5ab36cd9a3210f17a3246df6')
	.then(todo => {
		console.log('todo: ', todo);
	});
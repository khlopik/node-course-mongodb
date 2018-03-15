// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log('obj: ', obj);

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	let dbo = db.db('TodoApp');

	// dbo.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	//
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	// dbo.collection('Users').insertOne({
	// 	name: 'Oleksii',
	// 	age: 35,
	// 	location: 'Ukraine'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Users.', err)
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});
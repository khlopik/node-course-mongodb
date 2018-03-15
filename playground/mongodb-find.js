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

	// dbo.collection('Todos').find({
	// 	_id: new ObjectID('5aaa3e414121ed2275251186')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// dbo.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	dbo.collection('Users').find({name: 'Oleksii'}).toArray()
		.then((data) => {
			console.log('Names:', JSON.stringify(data, undefined, 2));
		})
		.catch((err) => {
			console.log('Unable to find', err);
		})

	db.close();
});
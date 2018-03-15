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

	// dbo.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5aaa4e3f4121ed22752515da')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// })
	// 	.then((result) => {
	// 		console.log(result);
	// 	})

	dbo.collection('Users').findOneAndUpdate({_id: new ObjectID('5aaa3a0be56e48509e8c9e00')},
		{
			$set: {
				name: 'Oleksii'
			},
		$inc: {
				age: 1
		}}, {
		returnOriginal: false
		})
		.then((result) => {
			console.log('result: ', result);
		})

	// db.close();
});
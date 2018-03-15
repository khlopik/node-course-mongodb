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

	// deleteMany
	// dbo.collection('Todos').deleteMany({text: 'Eat lunch'})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// deleteOne
	// dbo.collection('Todos').deleteOne({text: 'Eat lunch'})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// findOneAndDelete
	// dbo.collection('Todos').findOneAndDelete({completed: false})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// dbo.collection('Users').deleteMany({name: 'Oleksii'})
	// 	.then((result) => {
	// 		console.log('result: ', result);
	// 	})

	dbo.collection('Users').findOneAndDelete({_id: ObjectID('5aaa3aec1d9aba7045c28316')})
		.then((result) => {
			console.log('result: ', result);
		})

	// db.close();
});
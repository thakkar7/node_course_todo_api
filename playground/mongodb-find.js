const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo_app',(err,db)=>{
	if(err)
		return console.log('unable to connect to database');

	console.log('connected to database');

	db.collection('Todos').find().count().then((count)=>{
		console.log(count);
	},(err)=>{
		console.log('unable to fetch');
	}) ;

	// db.close();
});


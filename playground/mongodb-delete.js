const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo_app',(err,db)=>{
	if(err)
		return console.log('unable to connect to database');

	console.log('connected to database');

	//deleteMany
	// db.collection('Todos').deleteMany({
	// 	name:'Gaurav'
	// }).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	db.collection('Todos').deleteOne({location:'Portugal'}).then((result)=>{
		console.log(result);
	});

	//there is also findOneAndDelete
	// db.close();
});


// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} =require('mongodb');

 

// MongoClient.connect('mongodb://localhost:27017/todo_app',(err,db)=>{
// 	if(err){
// 		return console.log('unable to connect to mongodb server');
// 	}
// 	console.log('connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text:'todo 1',
	// 	completed: false

	// },(err,res)=>{
	// 	if(err){
	// 		return console.log('unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(res.ops,undefined,2));
	// });

// 	db.collection('Todos').insertOne({
// 		name:'Gaurav',
// 		age:22,
// 		location:'India'
// 	},(err,res)=>{
// 		if(err)
// 			return console.log('error in inserting',err);

// 		console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
// 	})
// 	db.close();

// });
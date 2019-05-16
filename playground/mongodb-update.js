const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo_app',(err,db)=>{
	if(err)
		return console.log('unable to connect to database');

	console.log('connected to database');

	db.collection('Todos').findOneAndUpdate({
		_id:new ObjectID('5cdd691556e7bd906cf297b2')
	},{
		$set:{
			name:'lionel messi'
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	})
	// db.close();
});


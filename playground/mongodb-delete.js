const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

    //deleteMAny
    // db.collection('Todos').deleteMany({text: 'Go to Job'}).then((result) => {
    //   console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Go to Job'}).then((result) =>{
    //   console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Hemal'});

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID("5b22e9c6073add0a58264572")
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

  //db.close();
});

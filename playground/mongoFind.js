const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  const db = client.db('todoapp');
  // db.collection('Todos').find().toArray((err,res)=>{
  //     if(err){
  //         return console.log('unable to fetch data',err);
  //     }
  //     console.log(res);

  // })
  db
    .collection('Todos')
    .find({ name: 'sachin' })
    .toArray()
    .then(
      res => {
        console.log('results', res);
      },
      err => {
        console.log('error in getting the documents', err);
      }
    );
  db.close();
});

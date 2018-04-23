const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log('unable to connect to mongo-db server', err);
    return;
  }
  console.log('Connected to Mongo Server');
  const db = client.db('todoapp');
  db.collection('Todos').insertOne(
    {
      name: 'sachin tendulkar',
      profession: 'cricketer'
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to store the document', err);
      }
      console.log('result', JSON.stringify(result.ops, undefined, 2));
    }
  );
  db.close(); //closes the mongodb connection.
}); //Ist argument can be heroku url or aws url or it is localhost url where our database is present

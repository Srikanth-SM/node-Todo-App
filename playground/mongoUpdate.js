const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  const db = client.db('todoapp');
  db
    .collection('Todos')
    .findOneAndUpdate(
      {
        name: 'sachin'
      },
      {
        $set: {
          name: 'tendulkar'
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(res => {
      console.log(res);
      db.close();
    });
});

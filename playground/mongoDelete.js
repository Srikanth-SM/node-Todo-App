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

  //deleteOne
  // db.collection('Todos').deleteOne({'name':'sachin'},(err,res)=>{
  //     console.log(res);
  // })

  //deleteMany

  //findOneandDelete

  // db.collection.findOneandDelete({name:'sachine'},(err,res)=>{
  //     console.log(res);
  // })
  db
    .collection('Todos')
    .count()
    .then(
      count => {
        console.log(count);
        // db.collection('Todos').find({name:'sachin'}).toArray((err,res)=>{
        //     if(err)
        //         return console.log(err);
        //     console.log(res);
        // })
        db
          .collection('Todos')
          .find({ name: 'sachin' })
          .toArray()
          .then(
            res => {
              console.log('results', res);
              db.close();
            },
            err => {
              console.log('error in getting the documents', err);
              db.close();
            }
          );
      },
      err => {
        console.log('error in first then ', err);
        db.close();
      }
    )
    .catch(err => {
      console.log('error in catch', err);
      db.close();
    });
});

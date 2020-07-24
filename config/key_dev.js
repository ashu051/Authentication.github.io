module.exports = {
  mongoURI:
    "mongodb+srv://ashubajpai161:shivanshu@cluster0.zkday.mongodb.net/myapp?retryWrites=true&w=majority",
  secretOrKey: "secret",
};
// //const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ashubajpai161:<password>@cluster0.zkday.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

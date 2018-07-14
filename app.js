let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, conn) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("hi");
        // let demo = conn.db("demo");
        // let collection = demo.collection("sample");
        // collection.find({name:"sam"}).forEach(function(doc){
        //     console.log(doc);
        // });
        // collection.insert({
        //     name: "sam",
        //     age: 22
        // });
    }
    conn.close();
});
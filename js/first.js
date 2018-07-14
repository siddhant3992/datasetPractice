function matchPerYear(dataBaseName, collectionName) {
    const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb://127.0.0.1:27017";
    const fs = require("fs");
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, conn) {
            if (err) {
                console.log(err.message);
                process.exit();
            } else {
                const dataSet = conn.db(dataBaseName);
                const matches = dataSet.collection(collectionName);
                matches.aggregate([{
                    $group: {
                        _id: "$season",
                        count: {
                            $sum: 1
                        }
                    }
                }, {
                    $sort: {
                        _id: -1
                    }
                }]).toArray(function (err, doc) {
                    console.log(doc)
                    var reformattedArray = doc.map(obj => {
                        var rObj = [];
                        rObj.push(obj._id, obj.count);
                        return rObj;
                    });
                    fs.writeFile("./jsonFile/matchPerYear.json", JSON.stringify(reformattedArray), function (err) {
                        if (err) throw err;
                    });
                    resolve(reformattedArray);
                    conn.close();
                })

            }
        });
    });
}
matchPerYear("dataSet", "matches");

module.exports = {
    matchPerYear: matchPerYear
};
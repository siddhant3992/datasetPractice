function matchWinnerPerYear(dataBaseName, collectionName) {
    const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb://127.0.0.1:27017";
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
                        _id: {
                            "season": "$season",
                            "winner": "$winner"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                }, {
                    $sort: {
                        _id: -1
                    }
                }]).toArray(function (err, doc) {
                    let newArray = doc.map(obj => {
                            var rObj = {};
                            rObj[obj._id.winner] = obj.count;
                            return rObj;
                    });
                    let noOfWinsPerTeam = newArray.filter(value => Object.keys(value)!="");
                   
                    resolve(noOfWinsPerTeam);
                    console.log(noOfWinsPerTeam)
                    // [{
                    //     "name": "Sunrisers Hyderabad",
                    //     "data": [10, 6, 7, 11, 8]
                    // }]
                    conn.close();
                })

            }
        });
    });
}
matchWinnerPerYear("dataSet", "matches");

module.exports = {
    matchWinnerPerYear: matchWinnerPerYear
};
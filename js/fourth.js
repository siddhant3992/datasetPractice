function topEconomicalBowlers(dataBaseName,collectionName,deliveriesCollection,seasonData){
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
                    $match: {
                        season: seasonData
                    }
                }, {
                    $lookup: {
                        from: deliveriesCollection,
                        localField: "id",
                        foreignField: "match_id",
                        as: "deliveries"
                    }
                }, {
                    $unwind: "$deliveries"
                }, {
                    $group: {
                        "_id": "$deliveries.bowling_team",
                        "extraRuns": {
                            $sum: "$deliveries.extra_runs"
                        }
                    }
                }]).toArray(function (err, doc){
                    console.log(doc);
                    conn.close();
                })
            }
        });
        
    });
}
topEconomicalBowlers("dataset","matches","deliveries",2015);
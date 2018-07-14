const expect = require("chai").expect;
const path = require("path");
const filename = path.resolve("./js/second.js");
const second = require(filename);

describe("second", function () {

    it("it should return number of matches per year", async function () {
        const expectedData = [{
                "_id": {
                    "season": 2017,
                    "winner": "Sunrisers Hyderabad"
                },
                "count": 2
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Royal Challengers Bangalore"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Rising Pune Supergiant"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Mumbai Indians"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Kolkata Knight Riders"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Kings XI Punjab"
                },
                "count": 2
            },
            {
                "_id": {
                    "season": 2017,
                    "winner": "Delhi Daredevils"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2016,
                    "winner": "Mumbai Indians"
                },
                "count": 2
            },
            {
                "_id": {
                    "season": 2016,
                    "winner": "Kolkata Knight Riders"
                },
                "count": 2
            },
            {
                "_id": {
                    "season": 2016,
                    "winner": "Gujarat Lions"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2016,
                    "winner": "Delhi Daredevils"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "winner": "Sunrisers Hyderabad"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "winner": "Royal Challengers Bangalore"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "winner": "Rising Pune Supergiant"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "winner": "Mumbai Indians"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "winner": "Kolkata Knight Riders"
                },
                "count": 1
            }
        ];
        const dataBaseName = "dataSetTest";
        const collectionName = "matchesTest";
        const data = await second.matchWinnerPerYear(dataBaseName, collectionName);
        expect(data).deep.equals(expectedData);
    });
    it("it should not return undefined", async function () {
        const expectedData = undefined;
        const dataBaseName = "dataSetTest";
        const collectionName = "matchesTest";
        const data = await second.matchWinnerPerYear(dataBaseName, collectionName);
        expect(data).deep.not.equals(expectedData);
    });
    it("it should not return null", async function () {
        const expectedData = null;
        const dataBaseName = "dataSetTest";
        const collectionName = "matchesTest";
        const data = await second.matchWinnerPerYear(dataBaseName, collectionName);
        expect(data).deep.not.equals(expectedData);
    });
});
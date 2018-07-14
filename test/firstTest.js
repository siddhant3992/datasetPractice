const expect = require("chai").expect;
const path = require("path");
const filename = path.resolve("./js/first.js");
const first = require(filename);

describe("first", function () {

    it("it should return number of matches per year", async function () {
        const expectedData = [
            [2017, 9],
            [2016, 6],
            [2015, 5]
        ];
        const dataBaseName = "dataSetTest";
        const collectionName = "matchesTest";
        const data = await first.matchPerYear(dataBaseName, collectionName);
        expect(data).deep.equals(expectedData);
    });
});
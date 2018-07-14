const expect = require("chai").expect;
const path = require("path");
const filename = path.resolve("./js/third.js");
const third = require(filename);

describe("third", function () {

    it("it should return number of matches per year", async function () {
        const expectedData = [["Royal Challengers Bangalore", 2]];
        const dataBaseName = "dataSetTest";
        const collectionName = "matchesTest";
        const deliveriesCollection="deliveriesTest";
        const seasonData=2016;
        const data = await third.extraRunsPerTeam(dataBaseName, collectionName,deliveriesCollection,seasonData);
        expect(data).deep.equals(expectedData);
    });
});
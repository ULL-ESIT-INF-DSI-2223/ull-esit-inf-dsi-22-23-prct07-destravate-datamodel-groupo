import "mocha";
import { expect } from "chai";
import { route1, route2, route3} from "../src/database";
import { RouteCollection } from "../src/routescollection";

const routeCol = new RouteCollection([route1, route2]);
const routeCol2 = new RouteCollection([route1, route3]);

describe("alphabeticNameSortAscend() function test", () => {
  it("routeCol.alphabeticNameSortAscend() returns [route2, route1]", () => {
    expect(routeCol.alphabeticNameSortAscend()).to.be.eql([route2, route1]);
  });   
});

describe("alphabeticNameSortDescend() function test", () => {
  it("routeCol.alphabeticNameSortDescend() returns [route1, route2]", () => {
    expect(routeCol.alphabeticNameSortDescend()).to.be.eql([route1, route2]);
  });   
});

describe("usersQuantitySortAscend() function test", () => {
  it("routeCol.usersQuantitySortAscend() returns [route2, route1]", () => {
    expect(routeCol.usersQuantitySortAscend()).to.be.eql([route2, route1]);
  });   
});

describe("usersQuantitySortDescend() function test", () => {
  it("routeCol.usersQuantitySortDescend() returns [route1, route2]", () => {
    expect(routeCol.usersQuantitySortDescend()).to.be.eql([route1, route2]);
  });   
});

describe("lengthSortAscend() function test", () => {
  it("routeCol.lengthSortAscend() returns [route2, route1]", () => {
    expect(routeCol.lengthSortAscend()).to.be.eql([route2, route1]);
  });   
});

describe("lengthSortDescend() function test", () => {
  it("routeCol.lengthSortDescend() returns [route1, route2]", () => {
    expect(routeCol.lengthSortDescend()).to.be.eql([route1, route2]);
  });   
});

describe("ratingSortAscend() function test", () => {
  it("routeCol.ratingSortAscend() returns [route2, route1]", () => {
    expect(routeCol.ratingSortAscend()).to.be.eql([route2, route1]);
  });   
});

describe("ratingSortDescend() function test", () => {
  it("routeCol.ratingSortDescend() returns [route1, route2]", () => {
    expect(routeCol.ratingSortDescend()).to.be.eql([route1, route2]);
  });   
});

describe("bikeActivitySort() function test", () => {
  it("routeCol2.bikeActivitySort() returns [route1, route3]", () => {
    expect(routeCol2.bikeActivitySort()).to.be.eql([route1, route3]);
  });   
});

describe("runningActivitySort() function test", () => {
  it("routeCol2.runningActivitySort() returns [route3, route1]", () => {
    expect(routeCol2.runningActivitySort()).to.be.eql([route3, route1]);
  });   
});

describe("getLength() function test", () => {
  it("routeCol.getLength() returns 2", () => {
    expect(routeCol.getLength()).to.be.eql(2);
  });   
});
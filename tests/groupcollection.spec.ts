import "mocha";
import { expect } from "chai";
import { group1, group2 } from "../src/database";
import { GroupCollection } from "../src/groupcollection"

const groupCol = new GroupCollection([group1, group2]);

describe("alphabeticNameSortAscend() function test", () => {
  it("groupCol.alphabeticNameSortAscend() returns [group2, group1]", () => {
    expect(groupCol.alphabeticNameSortAscend()).to.be.eql([group1, group2]);
  });   
});

describe("alphabeticNameSortDescend() function test", () => {
  it("groupCol.alphabeticNameSortDescend() returns [group2, group1]", () => {
    expect(groupCol.alphabeticNameSortDescend()).to.be.eql([group2, group1]);
  });   
});

describe("kmsSortAscendWeek() function test", () => {
  it("groupCol.kmsSortAscendWeek() returns [group1, group2]", () => {
    expect(groupCol.kmsSortAscendWeek()).to.be.eql([group1, group2]);
  });   
});

describe("kmsSortDescendWeek() function test", () => {
  it("groupCol.kmsSortDescendWeek() returns [group2, group1]", () => {
    expect(groupCol.kmsSortDescendWeek()).to.be.eql([group2, group1]);
  });   
});

describe("kmsSortAscendMonth() function test", () => {
  it("groupCol.kmsSortAscendMonth() returns [group1, group2]", () => {
    expect(groupCol.kmsSortAscendMonth()).to.be.eql([group1, group2]);
  });   
});

describe("kmsSortDescendMonth() function test", () => {
  it("groupCol.kmsSortDescendMonth() returns [group2, group1]", () => {
    expect(groupCol.kmsSortDescendMonth()).to.be.eql([group2, group1]);
  });   
});

describe("kmsSortAscendYear() function test", () => {
  it("groupCol.kmsSortAscendYear() returns [group1, group2]", () => {
    expect(groupCol.kmsSortAscendYear()).to.be.eql([group1, group2]);
  });   
});

describe("kmsSortDescendYear() function test", () => {
  it("groupCol.kmsSortDescendYear() returns [group2, group1]", () => {
    expect(groupCol.kmsSortDescendYear()).to.be.eql([group2, group1]);
  });   
});

describe("membersSortAscend() function test", () => {
  it("groupCol.membersSortAscend() returns [group1, group2]", () => {
    expect(groupCol.membersSortAscend()).to.be.eql([group1, group2]);
  });   
});

describe("membersSortDescend() function test", () => {
  it("groupCol.membersSortDescend() returns [group2, group1]", () => {
    expect(groupCol.membersSortDescend()).to.be.eql([group2, group1]);
  });   
});

describe("getLength() function test", () => {
  it("groupCol.getLength() returns 5", () => {
    expect(groupCol.getLength()).to.be.eql(2);
  });   
});
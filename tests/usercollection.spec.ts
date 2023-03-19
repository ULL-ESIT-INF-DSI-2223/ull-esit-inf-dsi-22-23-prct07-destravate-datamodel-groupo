import "mocha";
import { expect } from "chai";
import { user1, user2 } from "../src/database";
import { UserCollection } from "../src/usersollection"

const userCol = new UserCollection([user1, user2])

describe("alphabeticNameSortAscend() function test", () => {
  it("userCol.alphabeticNameSortAscend() returns [user1, user2]", () => {
    expect(userCol.alphabeticNameSortAscend()).to.be.eql([user1, user2]);
  });   
});

describe("alphabeticNameSortDescend() function test", () => {
  it("userCol.alphabeticNameSortDescend() returns [user2, user1]", () => {
    expect(userCol.alphabeticNameSortDescend()).to.be.eql([user2, user1]);
  });   
});

describe("kmsSortAscendWeek() function test", () => {
  it("userCol.kmsSortAscendWeek() returns [user1, user2]", () => {
    expect(userCol.kmsSortAscendWeek()).to.be.eql([user1, user2]);
  });   
});

describe("kmsSortDescendWeek() function test", () => {
  it("userCol.kmsSortDescendWeek() returns [user2, user1]", () => {
    expect(userCol.kmsSortDescendWeek()).to.be.eql([user2, user1]);
  });   
});

describe("kmsSortAscendMonth() function test", () => {
  it("userCol.kmsSortAscendMonth() returns [user2, user1]", () => {
    expect(userCol.kmsSortAscendMonth()).to.be.eql([user2, user1]);
  });   
});

describe("kmsSortDescendMonth() function test", () => {
  it("userCol.kmsSortDescendMonth() returns [user1, user2]", () => {
    expect(userCol.kmsSortDescendMonth()).to.be.eql([user1, user2]);
  });   
});

describe("kmsSortAscendYear() function test", () => {
  it("userCol.kmsSortAscendYear() returns [user1, user2]", () => {
    expect(userCol.kmsSortAscendYear()).to.be.eql([user1, user2]);
  });   
});

describe("kmsSortDescendYear() function test", () => {
  it("userCol.kmsSortDescendYear() returns [user2, user1]", () => {
    expect(userCol.kmsSortDescendYear()).to.be.eql([user2, user1]);
  });   
});

describe("getLength() function test", () => {
  it("userCol.getLength() returns 2", () => {
    expect(userCol.getLength()).to.be.eql(2);
  });   
});
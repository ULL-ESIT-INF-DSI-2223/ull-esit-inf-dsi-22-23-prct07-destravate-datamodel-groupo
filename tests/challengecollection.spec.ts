import "mocha";
import { expect } from "chai";
import { chall1, chall2, chall3 } from "../src/database";
import { ChallengeCollection } from "../src/challengecollection"

const challCol = new ChallengeCollection([chall1, chall2, chall3]);

describe("alphabeticNameSortAscend() function test", () => {
  it("challCol.alphabeticNameSortAscend() returns [chall3, chall1, chall2]", () => {
    expect(challCol.alphabeticNameSortAscend()).to.be.eql([chall3, chall1, chall2]);
  });   
});

describe("alphabeticNameSortDescend() function test", () => {
  it("challCol.alphabeticNameSortDescend() returns [chall2, chall1, chall3]", () => {
    expect(challCol.alphabeticNameSortDescend()).to.be.eql([chall2, chall1, chall3]);
  }); 
});

describe("kmsSortAscend() function test", () => {
  it("challCol.kmsSortAscend() returns [chall3, chall1, chall2]", () => {
    expect(challCol.kmsSortAscend()).to.be.eql([chall3, chall1, chall2]);
  }); 
});

describe("kmsSortDescend() function test", () => {
  it("challCol.kmsSortDescend() returns [chall2, chall1, chall3]", () => {
    expect(challCol.kmsSortDescend()).to.be.eql([chall2, chall1, chall3]);
  }); 
});

describe("userSortAscend() function test", () => {
  it("challCol.userSortAscend() returns [chall2, chall1, chall3]", () => {
    expect(challCol.userSortAscend()).to.be.eql([chall2, chall1, chall3]);
  }); 
});

describe("userSortDescend() function test", () => {
  it("challCol.userSortDescend() returns [chall3, chall1, chall2]", () => {
    expect(challCol.userSortDescend()).to.be.eql([chall3, chall1, chall2]);
  }); 
});

describe("getLength() function test", () => {
  it("challCol.getLength() returns 3", () => {
    expect(challCol.getLength()).to.be.eql(3);
  }); 
});
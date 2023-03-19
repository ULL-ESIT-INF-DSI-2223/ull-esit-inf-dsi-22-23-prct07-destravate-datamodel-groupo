import "mocha";
import { expect } from "chai";
import { chall1, chall2, chall3} from "../src/database";
import { ChallengeCollection } from "../src/challengecollection"

const challCol = new ChallengeCollection([chall1, chall2]);

describe("removeItem() function test", () => {
  it("challCol.removeItem(0) returns [chall1]", () => {
    expect(challCol.removeItem(0)).to.be.eql(chall1);
  });  
});

describe("addItem() function test", () => {
  it("challCol.addItem(chall3) returns true", () => {
    expect(challCol.addItem(chall3)).to.be.eql(true);
  });   
});

describe("getItem() function test", () => {
  it("challCol.getItem(0) returns chall1", () => {
    expect(challCol.getItem(0)).to.be.eql(chall2);
  });   
});

describe("getNumberOfItems() function test", () => {
  it("challCol.getNumberOfItems() returns 3", () => {
    expect(challCol.getNumberOfItems()).to.be.eql(2);
  });   
});
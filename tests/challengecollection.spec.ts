import "mocha";
import { expect } from "chai";
import { Challenge } from "../src/challenge";
import { ChallengeCollection } from "../src/challengecollection"
import { Route } from "../src/route";
import { coords } from "../src/route";

const sCoords: coords = {x: 28.4894, y: 16.3168};
const eCoords: coords = {x: 28.4841, y: 16.2337};

const route1 = new Route(101, "Teide", sCoords, eCoords, 18, 1000, [201, 203, 207, 209], "bicicleta", 9.8);
const route2 = new Route(102, "Sentidos", sCoords, eCoords, 7, 250, [201, 202], "bicicleta", 7.2);
const route3 = new Route(103, "Lavas", sCoords, eCoords, 8, 600, [204, 206, 207, 208], "corriendo",6.8);
const route4 = new Route(104, "Acantilados", sCoords, eCoords, 10, 500, [205, 210, 211, 212, 215] ,"corriendo", 8.7);
const route5 = new Route(105, "Caldera", sCoords, eCoords, 8, 400, [202, 213, 214, 216] ,"bicicleta", 9.2);
const route6 = new Route(106, "Guanches", sCoords, eCoords, 9, 300, [205, 208, 215] ,"corriendo", 9.7);
const route7 = new Route(107, "Bosques", sCoords, eCoords, 12, 400, [217] ,"corriendo", 8.8);
const route8 = new Route(108, "Bodegas", sCoords, eCoords, 17, 500, [201, 217, 220] ,"bicicleta", 6.2);
const route9 = new Route(109, "Molinos", sCoords, eCoords, 14, 400, [218, 219] ,"bicicleta", 7.7);
const route10 = new Route(110, "Pueblos", sCoords, eCoords, 2, 200, [213, 220] ,"corriendo", 5.4);

const chall1 = new Challenge(1, "Tres Cumbres", [route1, route2, route5], "bicicleta");
const chall2 = new Challenge(2, "Vuelta Tenerife", [route6, route4, route3, route7, route10], "corriendo");
const chall3 = new Challenge(3, "Estrellas", [route8, route9], "bicicleta");

const challCol = new ChallengeCollection([chall1, chall2, chall3]);

const sort1 = new ChallengeCollection([chall3, chall1, chall2]);

console.log(challCol.alphabeticNameSortAscend());

describe("alphaticNameSortAscend() function test", () => {
  it("chall1.alphabeticNameSortAscend() returns 'Tres Cumbres'", () => {
    expect(challCol.alphabeticNameSortAscend()).to.be.eql(sort1);
  });   
});
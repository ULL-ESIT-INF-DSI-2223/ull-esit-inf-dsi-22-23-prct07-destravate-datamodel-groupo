import { Challenge } from "./challenge";
import { Collection } from "./collection";


import { Route } from "./route";
import { coords } from "./route";

export class ChallengeCollection extends Collection<Challenge> {
  constructor(challenges: Challenge[]){
    super(challenges);
  }
  
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName())* (-1));
  }

  kmsSortAscend() {
    return this.items.sort((a, b) => a.getTotalKms() - b.getTotalKms());
  }
  kmsSortDescend() {
    return this.items.sort((a, b) => a.getTotalKms() - b.getTotalKms() * (-1));
  }

}

const a: coords = { x: 2.4, y: 3.6 };

const b: coords = {x: 5.6, y: 9.8};


const route1 = new Route(123, "nombre", a, b, 120, 13, "bici", 9);
const route2 = new Route(141, "nombre2", b, a, 150, 10, "bici", 9);
const route3 = new Route(141, "nombre2", b, a, 80, 10, "bici", 9);
const route4 = new Route(141, "nombre2", b, a, 20, 10, "bici", 9);

const chall1 = new Challenge(10, "anombre", [route1, route2], "bici");
const chall2 = new Challenge(10, "cnombre", [route1, route4], "bici");
const chall3 = new Challenge(10, "bnombre", [route4, route3], "bici");

const challCol = new ChallengeCollection([chall1, chall2, chall3])

//console.log(challCol);
console.log(challCol.kmsSortDescend());
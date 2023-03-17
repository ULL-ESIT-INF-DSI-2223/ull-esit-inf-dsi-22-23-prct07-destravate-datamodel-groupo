import { Route } from "./route";
import { coords } from "./route";

const a: coords = { x: 2.4, y: 3.6 };

const b: coords = { x: 5.6, y: 9.8 };

const route1 = new Route(123, "nombre", a, b, 120, 13, [1], "bici", 9);
const route2 = new Route(141, "nombre2", b, a, 120, 10, [1], "bici", 9);

export class Challenge {
  private id: number;
  private name: string;
  private routes: Route[];
  private activityType: string;
  private totalKms: number;
  //private users;

  constructor(id, name, routes, activityType) {
    this.id = id;
    this.name = name;
    this.routes = routes;
    this.activityType = activityType;
    this.totalKms = 0;
    this.totalKms = this.getTotalKms();
  }

  getName() {
    return this.name;
  }

  getTotalKms() {
    this.totalKms = 0;
    for (let i = 0; i < this.routes.length; i++) {
      this.totalKms += this.routes[i].getLength();
    }
    return this.totalKms;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.routes.length; i++) {
      if (i < this.routes.length - 1) {
        str += this.routes[i].getName() + ", ";
      } else {
        str += this.routes[i].getName()
      }
    }
    console.log(`Id: ${this.id}
Nombre: ${this.name}
Rutas: ${str}
Actividad: ${this.activityType}
Kms: ${this.totalKms}`);
  }
}
const chall = new Challenge(10, "nombre", [route1, route2], "bici");

// console.log(chall.getTotalKms());
// console.log(chall.getTotalKms());

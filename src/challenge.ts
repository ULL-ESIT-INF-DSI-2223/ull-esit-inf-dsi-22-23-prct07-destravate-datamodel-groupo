import { Route } from "./route";
import { User } from "./users";

/**
 * Challenges that are included in the system.
 */
export class Challenge {
  private id: number;
  private name: string;
  private routes: Route[];
  private activityType: string;
  private totalKms: number;
  private users: User[];

  /**
   * Challenge's constructor.
   * @param id Challenge id.
   * @param name Challenge name.
   * @param routes Routes that compose the challenge.
   * @param activityType Indicate if the challenge can be completed by bike or running.
   */
  constructor(id, name, routes, activityType, users) {
    this.id = id;
    this.name = name;
    this.routes = routes;
    this.activityType = activityType;
    this.totalKms = 0;
    this.totalKms = this.getTotalKms();
    this.users = users;
  }

  /**
   * Get number of users that are doing the challenge.
   * @returns the number of user.
   */
  getNumberofUser() {
    return this.users.length
  }

  /**
   * Get challenge name.
   * @returns the challenge name.
   */
  getName() {
    return this.name;
  }

  /**
   * Get total kms of the challenge.
   * @returns total number of Kms.
   */
  getTotalKms() {
    this.totalKms = 0;
    for (let i = 0; i < this.routes.length; i++) {
      this.totalKms += this.routes[i].getLength();
    }
    return this.totalKms;
  }

  /**
   * Print the challenge.
   * @returns The string with the result.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.routes.length; i++) {
      if (i < this.routes.length - 1) {
        str += this.routes[i].getName() + ", ";
      } else {
        str += this.routes[i].getName()
      }
    }
    let str2 = "";
    for (let i = 0; i < this.users.length; i++) {
      if (i < this.users.length - 1) {
        str2 += this.users[i].getName() + ", ";
      } else {
        str2 += this.users[i].getName()
      }
    }
    const result = (`Id: ${this.id}
Nombre: ${this.name}
Rutas: ${str}
Actividad: ${this.activityType}
Kms: ${this.totalKms}
Usuarios: ${str2}`);
    return result;
  }  
}
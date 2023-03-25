import { Route } from "./route";
import { User } from "./users";
import { routeHistory } from "./users";

export type stats = {
  kmWeek: number;
  slopeWeek: number;
  kmMonth: number;
  slopeMonth: number;
  kmYear: number;
  slopeYear: number;
}

/**
 * Group that are included in the system.
 */
export class Group {

  private id: number;
  private name: string;
  private members: number[];
  private stats: stats;
  private favoriteRoutes: Route[];
  private routeHistory: routeHistory[];
  private owner: number;

  /**
   * Group class constructor
   * @param id Group's id
   * @param name Group's name
   * @param members Group's members
   * @param stats Group's stats 
   * @param favoriteRoutes Group's favorites routes
   * @param routeHistory Group's history
   * @param owner Group's owner
   */
  constructor(id, name, members, stats, favoriteRoutes, routeHistory, owner = 0) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.stats = stats;
    this.favoriteRoutes = favoriteRoutes;
    this.routeHistory = routeHistory;
    this.owner = owner;
  }

  /**
   * Group's function to get the owner
   * @return The group's owner
   */
  get Owner() {
    return this.owner;
  }

  /**
   * Group's function to get the id of the group
   * @return the id of the group
  */
  get Id() {
    return this.id;
  }

  /**
   * Get the name of the group.
   * @returns the name of the group.
   */
  getName() {
    return this.name;
  }

  /**
   * Get the stats of the group.
   * @returns the stats of the group.
   */
  getStats() {
    return this.stats;
  }

  /**
   * Print the stats of the group.
   * @returns The string with the result.
   */
  statsPrint() {
    const result = (`  Kms en la semana: ${this.stats.kmWeek}
  Desnivel en la semana: ${this.stats.slopeWeek} metros
  Kms en el mes: ${this.stats.kmMonth}
  Desnivel en el mes: ${this.stats.slopeMonth} metros
  Kms en el año: ${this.stats.kmYear}
  Desnivel en el año: ${this.stats.slopeYear} metros`)
return result;
  }

  /**
   * Print the group.
   * @returns the result with the result.
   */
  print() {
    let str = "";
    let str2 = "";
    for (let i = 0; i < this.members.length; i++) {
      if (i < this.members.length - 1) {
        str += this.members[i] + ", ";
      } else {
        str += this.members[i]
      }
    }
    for (let i = 0; i < this.favoriteRoutes.length; i++) {
      if (i < this.favoriteRoutes.length - 1) {
        str2 += this.favoriteRoutes[i].getName() + ", ";
      } else {
        str2 += this.favoriteRoutes[i].getName()
      }
    }
    const result = (`Id: ${this.id}
Nombre: ${this.name}
Participantes: ${str}
Estadísticas:\n${this.statsPrint()}
Clasificación:
Rutas favoritas: ${str2}`)
  return result;
  }

  /**
   * Get the number of members that compose the group.
   * @returns the number of members.
   */
  getNumberOfMembers() {
    return this.members.length
  }

  /**
   * Group's function to add a new user
   * @param user user to is going to be add to the group
   */
  addUser(user: User) {
    this.members.push(user.id);
  }

}

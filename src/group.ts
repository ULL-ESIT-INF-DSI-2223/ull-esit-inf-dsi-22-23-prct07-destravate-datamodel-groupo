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

  constructor(id, name, members, stats, favoriteRoutes, routeHistory) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.stats = stats;
    this.favoriteRoutes = favoriteRoutes;
    this.routeHistory = routeHistory;
  }

  // get Id() {
  //   return this.id;
  // }

  // set Id(id: number) {
  //   this.id = id;
  // }

  /**
   * Get the name of the group.
   * @returns the name of the group.
   */
  getName() {
    return this.name;
  }

  // set Name(name: string) {
  //   this.name = name;
  // }

  // get Members() {
  //   return this.members;
  // }

  // set Members(members: number[]) {
  //   this.members = members;
  // }

  /**
   * Get the stats of the group.
   * @returns the stats of the group.
   */
  getStats() {
    return this.stats;
  }

  set Stats(stats: stats) {
    this.stats = stats;
  }

  get FavoriteRoutes() {
    return this.favoriteRoutes;
  }

  set FavoriteRoutes(favoriteRoutes: Route[]) {
    this.favoriteRoutes = favoriteRoutes;
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
Estadísticas: ${this.statsPrint()}
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

  // get RouteHistory() {
  //   return this.routeHistory;
  // }

  // set RouteHistory(routeHistory: { date: Date; routeID: number }[]) {
  //   this.routeHistory = routeHistory;
  // }

  /*rankUsers(option: string): Usuario[] {
    const usew = Object.values(this.members);
    // Calcular estadísticas totales para cada usuario
    const totalStats: { [key: number]: number } = {};
    this.members.forEach((userID) => {
      let total = 0;
      const user = this.users[userID];
      if (user) {
        if (option === "distance") {
          total +=
            user.obtenerKmPorPeriodo("semana") +
            user.obtenerKmPorPeriodo("mes") +
            user.obtenerKmPorPeriodo("año");
        } else if (option === "elevation") {
          total +=
            user.obtenerKmDesnivelPorPeriodo("semana") +
            user.obtenerKmDesnivelPorPeriodo("mes") +
            user.obtenerKmDesnivelPorPeriodo("año");
        } else {
          throw new Error("Opción no válida");
        }
      }
      totalStats[userID] = total;
    });

    // Convertir totalStats hash a array de objetos de usuario
    const users: Usuario[] = [];
    for (const userID in totalStats) {
      const user = this.users[parseInt(userID)];
      if (user) {
        users.push(user);
      }
    }

    // Ordenar usuarios por total
    users.sort((a, b) => {
      return totalStats[b.id] - totalStats[a.id];
    });

    return users;
  }
  */
}

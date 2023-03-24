export type stats = {
    kmWeek: number;
    slopeWeek: number;
    kmMonth: number;
    slopeMonth: number;
    kmYear: number;
    slopeYear: number;
}

export type routeHistory = {
    date: string;
    idRoute: number;
}

/**
 * user's that are included in the system
 */
export class User {

  /**
   * User's constructor
   * @param id User's id
   * @param name User's name
   * @param activity User's prefered activity
   * @param friends User's friends
   * @param friendsGroup User's Group
   * @param stats User's stats
   * @param favoriteRoutes User's favourite routes
   * @param activeChallenge User's activities
   * @param routeHistory User's histoy
   */
  constructor(public id: number,public name: string,public activity: string,public friends: number[], public friendsGroup: number[], public stats: stats, public favoriteRoutes: number[], public activeChallenge: number[], public routeHistory: routeHistory[]) {
  }
    

  /**
   * User's function to add a friend
   * @param idFriend id of the friend
   */
  addFriend(idFriend: number) {
      this.friends.push(idFriend);
  }
  /**
   * User's function to delete a friend
   * @param idFriend id of the friend
   */
  deleteFriend(idFriend: number) {
      this.friends.splice(this.friends.indexOf(idFriend), 1);
  }
  

  /**
   * User function to get the stats
   * @returns the stats of the user
   */
  getStats() {
    return this.stats;
  }

  /**
 * Get user name.
 * @returns user name.
 */
  getName() {
    return this.name;
  }

  /**
   * User's function to print the user's stats
   * @returns a string with the user's stats
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
   * user's function to print the history
   */
  routeHistoryPrint() {
    let str = "";
    for (let i = 0; i < this.routeHistory.length; i++) {
      if (i < this.routeHistory.length - 1) {
        str += this.routeHistory[i].date + ", ";
      } else {
        str += this.routeHistory[i]
      }
    }
  }
  
  /**
   * user's function to print all the user's information
   * @returns a string with the user's information
   */
  print() {
    let str = "";
    let str2 = "";
    let str3 = "";
    let str4 = "";
    for (let i = 0; i < this.friends.length; i++) {
      if (i < this.friends.length - 1) {
        str += this.friends[i] + ", ";
      } else {
        str += this.friends[i]
      }
    }
    for (let i = 0; i < this.favoriteRoutes.length; i++) {
      if (i < this.favoriteRoutes.length - 1) {
        str3 += this.favoriteRoutes[i] + ", ";
      } else {
        str3 += this.favoriteRoutes[i]
      }
    }
    for (let i = 0; i < this.activeChallenge.length; i++) {
      if (i < this.activeChallenge.length - 1) {
        str2 += this.activeChallenge[i] + ", ";
      } else {
        str2 += this.activeChallenge[i]
      }
    }
    for (let i = 0; i < this.activeChallenge.length; i++) {
      if (i < this.activeChallenge.length - 1) {
        str4 += this.activeChallenge[i] + ", ";
      } else {
        str4 += this.activeChallenge[i]
      }
    }
    const result = (`Id: ${this.id}
    Nombre: ${this.name}
    Actividad: ${this.activity}
    Amigos: ${str}
    Grupos de amigos: ${str2}
    Estadísticas:\n${this.statsPrint()}
    Rutas favoritas: ${str3}
    Retos activos: ${str4}`)
    return result;
  }
}
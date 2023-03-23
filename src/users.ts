//type actividades = 'correr'|'bicicleta';

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

export class User {
  constructor(public id: number,public name: string,public activity: string,public friends: number[], public friendsGroup: number[], public stats: stats, public favoriteRoutes: number[], public activeChallenge: number[], public routeHistory: routeHistory[]) {
  }
    


    addFriend(idFriend: number) {
        this.friends.push(idFriend);
    }
    deleteFriend(idFriend: number) {
        this.friends.splice(this.friends.indexOf(idFriend), 1);
    }
    


    // crearGrupo(idGrupo: string, nombreGrupo: string, miembros: string[]) {
    //     this.grupos[idGrupo] = miembros;
    // }

    // agregarRutaFavorita(rutaId: string) {
    //     this.rutasFavoritas.push(rutaId);
    // }

    // agregarRutaHistorica(rutaId: number, fecha: Date) {
    //     this.historicoRutas.push({ rutaId, fecha });
    // }
    
    // obtenerKmPorPeriodo(periodo:string){
    //     switch (periodo.toLowerCase()) {
    //         case 'semana':
    //             return this.estadisticas.kmSemana;
    //         case 'mes':
    //             return this.estadisticas.kmMes;
    //         case 'año':
    //             return this.estadisticas.kmAno;
    //         default :
    //             return undefined;
    //     }
    // }

  // obtenerKmDesnivelPorPeriodo(periodo: string) {
  //       switch (periodo.toLowerCase()) {
  //           case 'semana':
  //               return this.estadisticas.desnivelSemana;
  //           case 'mes':
  //               return this.estadisticas.desnivelMes;
  //           case 'año':
  //               return this.estadisticas.desnivelAno;
  //           default :
  //               return undefined;
  //       }
  //   }

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

  statsPrint() {
    const result = (`  Kms en la semana: ${this.stats.kmWeek}
  Desnivel en la semana: ${this.stats.slopeWeek} metros
  Kms en el mes: ${this.stats.kmMonth}
  Desnivel en el mes: ${this.stats.slopeMonth} metros
  Kms en el año: ${this.stats.kmYear}
  Desnivel en el año: ${this.stats.slopeYear} metros`)
return result;
  }

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
//Histórico de rutas: ${this.routeHistoryPrint()}`)
return result;
  }
}

// const stats1: stats = {
//     kmWeek: 76,
//     slopeWeek: 150,
//     kmMonth: 210,
//     slopeMonth: 500,
//     kmYear: 1375,
//     slopeYear: 7000
// }

// const routeHistory1: routeHistory = {
//     date: "12/05/2022",
//     idRoute: 101
// }

// const routeHistory2: routeHistory = {
//     date: "23/07/2022",
//     idRoute: 102
// }

// const prueba = new User(1, "prueba", "correr", [201, 202], [201, 202], stats1, [101, 102], [1, 3], [routeHistory1, routeHistory2])
// console.log(prueba.print());
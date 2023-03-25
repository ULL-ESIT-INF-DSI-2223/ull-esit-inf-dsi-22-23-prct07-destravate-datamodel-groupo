# Práctica 7 - Modelo de datos de un sistema de información que permite almacenar registros de actividades deportivas
Esta práctica consiste en la realización de un sistema de información que permita almacenar registros de actividades deportivas.
\
\
Esta práctica se ha realizado en grupo por los siguientes alumnos:
- Pablo de la Fuente Rodríguez (alu0101336152@ull.edu.es) 
- José David Mur Álvarez (alu0101052168@ull.edu.es)
- Carlos Pío Reyes (alu0101132945@ull.edu.es)
/
/
## Requisitos del sistema
Para la creación de este sistema se proponen 4 elementos fundamentales: Rutas, Usuarios, Grupos y Retos.
\
\
Para cada uno de estos elementos se ha creado su correspondiente clase, con los atributos y métodos indicados en el guion de la práctica. El código fuente de cada cada una de las clases se ha orgazinado en su propio fichero, utilizando la sintaxis ES para importar/exportar las diferentes entidades. Además de utilizar la documentación TypeDoc y sus respectivas pruebas en la carpeta _test_.
\
\
Estas cuatro clases son las siguientes:
\
\
### Routes
Esta clase almacena una ruta en el sistema con los atributos definidos en el enunciado, ademas posee unos metodos para devolver esos valores y un metodo para imprimir esa información por pantalla.
_Routes_:
```TypeScript
export class Route {
  private id: number;
  private name: string;
  private startCoords: coords;
  private endCoords: coords;
  public length: number;
  private avarageSlope: number;
  private usersIds: number[];
  private activityType: string;
  private rating: number;

  constructor(id, name, startCoords, endCoords, length, avarageSlope, usersIds, activityType, rating) {
    this.id = id;
    this.name = name;
    this.startCoords = startCoords;
    this.endCoords = endCoords;
    this.length = length;
    this.avarageSlope = avarageSlope;
    this.usersIds = usersIds;
    this.activityType = activityType;
    this.rating = rating;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getUsersQuantity() {
    return this.usersIds.length;
  }

  getLength() {
    return this.length;
  }

  getActivityType() {
    return this.activityType;
  }

  getRating() {
    return this.rating;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.usersIds.length; i++) {
      if (i < this.usersIds.length - 1) {
        str += this.usersIds[i] + ", ";
      } else {
        str += this.usersIds[i]
      }
    }
    const result = (`Id: ${this.id}
    Nombre: ${this.name}
    Geolocalización de inicio: ${this.startCoords.x}, ${this.startCoords.y}
    Geolocalización del final: ${this.endCoords.x}, ${this.endCoords.y}
    Longitud de la ruta: ${this.length} kilómetros
    Desnivel medio de la ruta: ${this.avarageSlope} metros
    Ids de los usuarios que han realizado la ruta: ${str}
    Actividad: ${this.activityType}
    Calificación media: ${this.rating}`);
    return result;
  }
}
```
### Users
Esta clase define un usuario del sistema, aparte de los atributos que se nos proporcionan y los metodos correspondientes para obtener esos datos, la clase user nos permite borrar o añadir usuarios a la lista de amigos y mostrar el historial de rutas.
_Users_:
```TypeScript
export class User {

  constructor(public id: number,public name: string,public activity: string,public friends: number[], public friendsGroup: number[], public stats: stats, public favoriteRoutes: number[], public activeChallenge: number[], public routeHistory: routeHistory[]) {
  }
  
  addFriend(idFriend: number) {
      this.friends.push(idFriend);
  }
  
  deleteFriend(idFriend: number) {
      this.friends.splice(this.friends.indexOf(idFriend), 1);
  }
  
  getStats() {
    return this.stats;
  }

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
    return result;
  }
}
```
### Groups
Esta clase representa un grupo de usuarios del sistema, con sus metodos podemos obtener sus atributos, mostrarlos por pantalla, mostrar los usuarios que componen el grupo y sus rutas favoritas y añadir usuarios al grupo.
_Groups_:
```TypeScript
export class Group {

  private id: number;
  private name: string;
  private members: number[];
  private stats: stats;
  private favoriteRoutes: Route[];
  private routeHistory: routeHistory[];
  private owner: number;

  constructor(id, name, members, stats, favoriteRoutes, routeHistory, owner = 0) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.stats = stats;
    this.favoriteRoutes = favoriteRoutes;
    this.routeHistory = routeHistory;
    this.owner = owner;
  }

  get Owner() {
    return this.owner;
  }

  get Id() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return this.stats;
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
    Estadísticas:
    ${this.statsPrint()}
    Clasificación:
    Rutas favoritas: ${str2}`)
  return result;
  }

  getNumberOfMembers() {
    return this.members.length
  }

  addUser(user: User) {
    this.members.push(user.id);
  }
}
```
### Challenges
Este metodo que representa los retos del sistema, tiene metodos que nos devuelve sus atributos y un metodo que muestra toda la informacion del reto por pantalla.
_Challenge_:
```TypeScript
export class Challenge {
  private id: number;
  private name: string;
  public routes: Route[];
  private activityType: string;
  private totalKms: number;
  private users: User[];

  constructor(id, name, routes, activityType, users) {
    this.id = id;
    this.name = name;
    this.routes = routes;
    this.activityType = activityType;
    this.totalKms = 0;
    this.totalKms = this.getTotalKms();
    this.users = users;
  }

  getNumberofUser() {
    return this.users.length
  }

  getName() {
    return this.name;
  }

  getTotalKms() {
    this.totalKms = 0;
    for (const element of this.routes) {
      this.totalKms += element.length;
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
```
Para posteriormente comprobar el funcionamiento se deberán de crear varios objetos distintos de las clases anteriormente mencionadas es por ello que hemos decidido organizarlo en colecciones. Comenzando por una clase abstracta _collection_ que es heredada por las colecciones del resto de elementos.
\
\
_Collection_:
```TypeScript

export abstract class Collection<T> {
  
  constructor(protected items: T[]) {   
  }

  removeItem(index: number): T {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
  }

  addItem(newItem: T) {
    this.items.push(newItem);  
    return true;
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getNumberOfItems() {
    return this.items.length;
  }
}
```
Cómo podemos ver la clase _collection_ es una clase abstracta genérica que tiene en el constructor un array de tipo _T_, tal y como hemos hecho en prácticas anteriores. Tambien se han implementado métodos generales para gestionar las colecciones.
\
\
Al igual que en el resto de clases se han realizado las pruebas pertinentes:
```
removeItem() function test
    ✔ challCol.removeItem(0) returns [chall1]

  addItem() function test
    ✔ challCol.addItem(chall3) returns true

  getItem() function test
    ✔ challCol.getItem(0) returns chall1

  getNumberOfItems() function test
    ✔ challCol.getNumberOfItems() returns 3
```
Ademas se ha creado una serie de clases hijas de _collection_ que aparte de los metodos arriba mostrado poseen una serie de metodos que permiten organizar los elementos dentro de la coleccion por los distintos parametros que se han indicado en la practica.
El resto de clases _collection_ que heredan de la anterior son las siguientes:
\
\
_RoutesCollection_:
```TypeScript
export class RouteCollection extends Collection<Route> {

  constructor(routes: Route[]) {
    super(routes);
  }

  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  usersQuantitySortAscend() {
    return this.items.sort((a, b) => a.getUsersQuantity() - b.getUsersQuantity());
  }

  usersQuantitySortDescend() {
    return this.items.sort((a, b) => b.getUsersQuantity() - a.getUsersQuantity());
  }

  lengthSortAscend() {
    return this.items.sort((a, b) => a.getLength() - b.getLength());
  }

  lengthSortDescend() {
    return this.items.sort((a, b) => b.getLength() - a.getLength());
  }

  ratingSortAscend() {
    return this.items.sort((a, b) => a.getRating() - b.getRating());
  }

  ratingSortDescend() {
    return this.items.sort((a, b) => b.getRating() - a.getRating());
  }

  bikeActivitySort() {
    return this.items.sort((a,b) => a.getActivityType().localeCompare(b.getActivityType()) )
  }

  runningActivitySort() {
    return this.items.sort((a,b) => b.getActivityType().localeCompare(a.getActivityType()) )
  }
  
  getLength() {
    return this.items.length;
  }

  printNames(){
    this.items.forEach(route => {
        console.log(route.getId(), route.getName())
    });
  }

  getRouteById(id: number){
    return this.items.find((route) => route.getId() === id);
  }
}
```
_UsersCollection_:
```TypeScript
export class UserCollection extends Collection<User> {
  
  constructor(users: User[]) {
    super(users)
  }

  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  getLength() {
    return this.items.length;
  }

  getUserbyId(id: number) {
    return this.items.find((user) => user.id === id);
  }

  showUsers() {
    this.items.forEach((user) => {
      console.log(user.id);
    });
  }

};
```
_GroupCollection_:
```TypeScript
export class GroupCollection extends Collection<Group> {
  
  constructor(groups: Group[]){
    super(groups)
  }

  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  membersSortAscend() {
    return this.items.sort((a, b) => a.getNumberOfMembers() - b.getNumberOfMembers())
  }

  membersSortDescend() {
    return this.items.sort((a, b) => b.getNumberOfMembers() - a.getNumberOfMembers())
  }

  getLength() {
    return this.items.length;
  }

  showGroups() {
    this.items.forEach(group => {
      console.log(group.Id, group.getName());
    });
  }

  getGroupById(id: number) {
    return this.items.find(group => group.Id === id);
  }
}
```
_ChallengeCollection_:
```TypeScript
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
    return this.items.sort((a, b) => b.getTotalKms() - a.getTotalKms());
  }

  userSortAscend() {
    return this.items.sort((a, b) => a.getNumberofUser() - b.getNumberofUser())
  }

  userSortDescend() {
    return this.items.sort((a, b) => b.getNumberofUser() - a.getNumberofUser())
  }

    getLength() {
      return this.items.length;
    }
}
```
## Funcionamiento
Para comprobar el funcionamiento de las clases anteriormente implementadas se han creado una "base de datos" donde se declaran los siguientes elementos:
- 10 rutas.
- 20 usuarios.
- 5 grupos.
- 3 retos.
\
\
_Database_:
```TypeScript
import { Route } from "./route";
import { coords } from "./route";
import { routeHistory } from "./users";

import { User } from "./users"
import { stats } from "./users";
import { Challenge } from "./challenge";
import { Group } from "./group";


const sCoords: coords = {x: 28.4894, y: 16.3168};
const eCoords: coords = {x: 28.4841, y: 16.2337};

export const route1 = new Route(101, "Teide", sCoords, eCoords, 18, 1000, [201, 203, 207, 209], "bicicleta", 9.8);
export const route2 = new Route(102, "Sentidos", sCoords, eCoords, 7, 250, [201, 202], "bicicleta", 7.2);
export const route3 = new Route(103, "Lavas", sCoords, eCoords, 8, 600, [204, 206, 207, 208], "corriendo",6.8);
export const route4 = new Route(104, "Acantilados", sCoords, eCoords, 10, 500, [205, 210, 211, 212, 215] ,"corriendo", 8.7);
export const route5 = new Route(105, "Caldera", sCoords, eCoords, 8, 400, [202, 213, 214, 216] ,"bicicleta", 9.2);
export const route6 = new Route(106, "Guanches", sCoords, eCoords, 9, 300, [205, 208, 215] ,"corriendo", 9.7);
export const route7 = new Route(107, "Bosques", sCoords, eCoords, 12, 400, [217] ,"corriendo", 8.8);
export const route8 = new Route(108, "Bodegas", sCoords, eCoords, 17, 500, [201, 217, 220] ,"bicicleta", 6.2);
export const route9 = new Route(109, "Molinos", sCoords, eCoords, 14, 400, [218, 219] ,"bicicleta", 7.7);
export const route10 = new Route(110, "Pueblos", sCoords, eCoords, 2, 200, [213, 220] ,"corriendo", 5.4);

export const stats1: stats = {kmWeek: 76, slopeWeek: 3200, kmMonth: 354, slopeMonth: 12800, kmYear: 3248, slopeYear: 153600};
export const stats2: stats = {kmWeek: 87, slopeWeek: 4900, kmMonth: 248, slopeMonth: 19600, kmYear: 4676, slopeYear: 235200};
export const stats3: stats = {kmWeek: 92, slopeWeek: 5100, kmMonth: 378, slopeMonth: 24000, kmYear: 4016, slopeYear: 288000};
export const stats4: stats = {kmWeek: 63, slopeWeek: 2700, kmMonth: 292, slopeMonth: 10800, kmYear: 4524, slopeYear: 129600};
export const stats5: stats = {kmWeek: 91, slopeWeek: 5000, kmMonth: 324, slopeMonth: 20000, kmYear: 4068, slopeYear: 240000};
export const stats6: stats = {kmWeek: 86, slopeWeek: 4700, kmMonth: 384, slopeMonth: 18800, kmYear: 4128, slopeYear: 225600};
export const stats7: stats = {kmWeek: 69, slopeWeek: 3000, kmMonth: 226, slopeMonth: 12000, kmYear: 3136, slopeYear: 144000};
export const stats8: stats = {kmWeek: 73, slopeWeek: 3200, kmMonth: 252, slopeMonth: 12800, kmYear: 3004, slopeYear: 153600};
export const stats9: stats = {kmWeek: 72, slopeWeek: 3100, kmMonth: 328, slopeMonth: 12400, kmYear: 3756, slopeYear: 148800};
export const stats10: stats = {kmWeek: 65, slopeWeek: 2900, kmMonth: 290, slopeMonth: 11600, kmYear: 3220, slopeYear: 139200};
export const stats11: stats = {kmWeek: 84, slopeWeek: 3800, kmMonth: 366, slopeMonth: 15200, kmYear: 4375, slopeYear: 182400};
export const stats12: stats = {kmWeek: 98, slopeWeek: 5400, kmMonth: 352, slopeMonth: 21600, kmYear: 3235, slopeYear: 259200};
export const stats13: stats = {kmWeek: 74, slopeWeek: 4100, kmMonth: 276, slopeMonth: 16400, kmYear: 3863, slopeYear: 196800};
export const stats14: stats = {kmWeek: 96, slopeWeek: 5200, kmMonth: 334, slopeMonth: 20800, kmYear: 4216, slopeYear: 249600};
export const stats15: stats = {kmWeek: 102, slopeWeek: 5800, kmMonth: 408, slopeMonth: 23200, kmYear: 4176, slopeYear: 278400};
export const stats16: stats = {kmWeek: 75, slopeWeek: 4000, kmMonth: 312, slopeMonth: 16000, kmYear: 3672, slopeYear: 192000};
export const stats17: stats = {kmWeek: 62, slopeWeek: 3100, kmMonth: 276, slopeMonth: 12400, kmYear: 3871, slopeYear: 148800};
export const stats18: stats = {kmWeek: 58, slopeWeek: 2600, kmMonth: 272, slopeMonth: 10400, kmYear: 3900, slopeYear: 124800};
export const stats19: stats = {kmWeek: 93, slopeWeek: 4700, kmMonth: 322, slopeMonth: 18800, kmYear: 4254, slopeYear: 225600};
export const stats20: stats = {kmWeek: 75, slopeWeek: 3800, kmMonth: 298, slopeMonth: 15200, kmYear: 4183, slopeYear: 182400};

export const groupStats1: stats = {kmWeek: 228, slopeWeek: 9600, kmMonth: 1062, slopeMonth: 38400, kmYear: 9744, slopeYear: 460800};
export const groupStats2: stats = {kmWeek: 375, slopeWeek: 19000, kmMonth: 1490, slopeMonth: 76000, kmYear: 20915, slopeYear: 912000};
export const groupStats3: stats = {kmWeek: 232, slopeWeek: 10400, kmMonth: 544, slopeMonth: 52000, kmYear: 15600, slopeYear: 499200};
export const groupStats4: stats = {kmWeek: 248, slopeWeek: 12400, kmMonth: 1104, slopeMonth: 49600, kmYear: 15484, slopeYear: 595200};
export const groupStats5: stats = {kmWeek: 207, slopeWeek: 9000, kmMonth: 678, slopeMonth: 36000, kmYear: 9408, slopeYear: 432000};

const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}
const routeHistory2: routeHistory = {date: "23/07/2022", idRoute: 102}

export const user1 = new User(201, "Ana", "correr", [202, 203], [202], stats1, [101, 102], [1, 3], [routeHistory1, routeHistory2]);
export const user2 = new User(202, "Juan", "correr", [205, 214, 216], [205, 216], stats2, [107], [2], [routeHistory1, routeHistory2]);
export const user3 = new User(203, "María", "bicicleta", [201, 206], [201], stats3, [106, 108], [2, 3], [routeHistory1, routeHistory2]);
export const user4 = new User(204, "Luis", "bicicleta", [220], [220], stats4, [103], [1], [routeHistory1, routeHistory2]);
export const user5 = new User(205, "Sofía", "correr", [208, 209, 211], [209, 211], stats5, [107, 109, 110], [2], [routeHistory1, routeHistory2]);
export const user6 = new User(206, "Carlos", "correr", [204, 205, 217, 219, 220], [205, 206, 217], stats6, [105, 107], [1], [routeHistory1, routeHistory2]);
export const user7 = new User(207, "Laura", "correr", [206, 208, 209, 210], [208, 209], stats7, [103, 106, 108], [1, 2], [routeHistory1, routeHistory2]);
export const user8 = new User(208, "José", "bicicleta", [201, 213], [201], stats8, [104], [3], [routeHistory1, routeHistory2]);
export const user9 = new User(209, "Pablo", "bicicleta", [219], [219], stats9, [102, 105], [2, 3], [routeHistory1, routeHistory2]);
export const user10 = new User(210, "Miguel", "bicicleta", [213, 214], [214], stats10, [106], [], [routeHistory1, routeHistory2]);
export const user11 = new User(211, "Carmen", "bicicleta", [206, 207, 218], [206, 218], stats11, [107, 108], [1], [routeHistory1, routeHistory2]);
export const user12 = new User(212, "David", "correr", [211, 212, 215], [212, 215], stats12, [109], [1], [routeHistory1, routeHistory2]);
export const user13 = new User(213, "Patricia", "bicicleta", [211, 214], [211], stats13, [110], [1, 3], [routeHistory1, routeHistory2]);
export const user14 = new User(214, "Pedro", "correr", [218, 220], [218], stats14, [105, 107, 108], [1, 2], [routeHistory1, routeHistory2]);
export const user15 = new User(215, "Paola", "bicicleta", [203, 205, 211], [203, 205], stats15, [104], [2, 3], [routeHistory1, routeHistory2]);
export const user16 = new User(216, "Jorge", "bicicleta", [204], [204], stats16, [101, 103], [1], [routeHistory1, routeHistory2]);
export const user17 = new User(217, "Daniela", "correr", [205], [205], stats17, [108], [], [routeHistory1, routeHistory2]);
export const user18 = new User(218, "Roberto", "correr", [207, 209, 217], [207, 209], stats18, [101, 102, 105], [1, 2], [routeHistory1, routeHistory2]);
export const user19 = new User(219, "Andrea", "bicicleta", [208, 213], [208, 213], stats19, [105, 108, 109, 110], [2], [routeHistory1, routeHistory2]);
export const user20 = new User(220, "Eduardo", "correr", [209, 212, 219], [212, 220], stats20, [109, 110], [3], [routeHistory1, routeHistory2]);

export const group1 = new Group(301, "Los Caminantes", [206, 208, 209], groupStats1, [route2, route4, route5], [routeHistory1, routeHistory2]);
export const group2 = new Group(302, "Senderistas en Acción", [207, 210, 212, 214, 215], groupStats2, [route3, route4, route8], [routeHistory1, routeHistory2]);
export const group3 = new Group(303, "Exploradores de la Naturaleza", [201, 202, 204, 217], groupStats3, [route5, route7], [routeHistory1, routeHistory2]);
export const group4 = new Group(304, "Pasos de Montaña", [203, 205, 213, 216], groupStats4, [route1, route10], [routeHistory1, routeHistory2]);
export const group5 = new Group(305, "Andarines Aventureros", [218, 219, 220], groupStats5, [route7, route9], [routeHistory1, routeHistory2]);

export const chall1 = new Challenge(1, "Tres Cumbres", [route1, route2, route5], "bicicleta", [user1, user3, user7]);
export const chall2 = new Challenge(2, "Vuelta Tenerife", [route6, route4, route3, route7, route10], "corriendo", [user2, user4]);
export const chall3 = new Challenge(3, "Estrellas", [route8, route9], "bicicleta", [user5, user6, user8, user9, user10]);
```
\
\
Para probar el correcto funcionamiento de nuestro diseño hemos realizado en un fichero aparte (_functioning_) una línea de comandos interactiva mediante el uso del módulo _Inquirer.js_, complementado con el uso del paquete _Lowdb_ para lograr que persiste los cambios en la información de nuestra base de datos. Debido al extenso tamaño en cuanto a líneas se refiere del fichero, no se expondrá en este informe en su totalidad, aunque sí fragmentos para mostrar el funcionamiento.
\
\
Los primero es crear las colecciones indicadas con cada uno de los objetos de la _database_ mostrada anteriormente e introducirlo en el _json_ generado por _Lowdb_ ya que es ahí donde se encontrará nuestra base de datos realmente.
```TypeScript
const challCol = new ChallengeCollection([chall1, chall2, chall3]);
const routeCol = new RouteCollection([route1, route2, route3, route4, route5, route6, route7, route8, route9, route10]);
const userCol = new UserCollection([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]);
const groupCol = new GroupCollection([group1, group2, group3, group4, group5]);

db.defaults({routeCol}).write();
db.defaults({userCol}).write();
db.defaults({groupCol}).write();
db.defaults({challCol}).write();
```
Esto solo se realizará la primera vez para que queden guardadas en el _json_, después eliminaremos las líneas _db.defaults...write()_ para que no se altere nuestra base de datos cada vez que ejecutamos el programa.
## Clase Gestor
Para la clase gestor también se ha hecho uso de _Inquirer.js_ lo que nos permite hacer uso de la linea de comandos interactiva para poder hacer operaciones de gestion en la base de datos que se indican en el enunciado, que son:
/
*Registrarse en el sistema*. Los usuarios que se conectan por primera vez al sistema deberan registrarse en el mismo para crear un usuario nuevo con sus datos, ademas para que una persona pueda volver a conectarse y usar su usuario en el sistema tambien hemos implementado un metodo _log in_, que comprueba que estés registrado y si es así te permite hacer uso de las funciones del sistema con tu usuario.
```Typescript
async signIn() {
  const answer = await inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Introduce tu id",
    },
    {
      name: "name",
      type: "input",
      message: "Introduce tu nombre",
    },
    {
      name: "activity",
      type: "input",
      message: "Introduce tu actividad",
    },
  ]);
  if (this.users.getUserbyId(answer.id)) {
    console.log("El usuario ya existe");
    await this.signIn();
  }
  const user = new User(
    answer.id,
    answer.name,
    answer.activity,
    [],
    [],
    {
      kmWeek: 0,
      kmMonth: 0,
      kmYear: 0,
      slopeWeek: 0,
      slopeMonth: 0,
      slopeYear: 0,
    },
    [],
    [],
    []
  );
  this.users.addItem(user);
  this.user = user;
  console.log("Usuario creado correctamente");
}

async logIn() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce tu id",
      },
    ]);
    answer.id = parseInt(answer.id);
    const user = this.users.getUserbyId(answer.id);
    if (user) {
      this.user = user;
      console.log("Bienvenido");
    } else {
      console.log("El usuario no existe. Vuelve a intentarlo");
      await this.logIn();
    }
  }
```
Ejemplo de funcionamiento:
```
```
*Visualizar todas las rutas existentes dentro del sistema*. Este método imprime una lista por pantalla de todas las rutas con sus ids y luego nos permite escoger una de entre estas y mostrar todos sus datos.

```Typescript
async showRoutes() {
    routeCol.printNames();

    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message:
          "Introduce el numero de la ruta de la que quieres obtener informacion:",
      },
    ]);
    answer.id = parseInt(answer.id);
    const route = this.routes.getRouteById(answer.id);
    if (route) {
      this.routes.getRouteById(answer.id).print();
    } else {
      console.log("la ruta no existe. Vuelve a intentarlo");
      await this.showRoutes();
    }
}
```
Ejemplo de funcionamiento:
```
```
*Unirse a un grupo existente*. Este método añade al usuario dentro de un grupo ya existente haciendo uso del metodo del grupo _addUser()_.

```Typescript
async joinGroup() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo al que quieres unirte",
      },
    ]);
    answer.id = parseInt(answer.id);
    const group = this.groups.getGroupById(answer.id);
    if (group) {
      group.addUser(this.user);
      console.log("Te has unido al grupo correctamente");
    } else {
      console.log("El grupo no existe");
    }
}
```
Ejemplo de funcionamiento:
```
```
*Visualizar, crear y borrar grupos*. Con estos métodos podemos ver los grupos que hay en el sistema, crear un nuevo grupo dentro del sistema o borrar los grupos que ya existan, esto último teniendo en cuenta que solo se puede hacer si el usuario es el creador del grupo, para ello el grupo guarda el id de su creador, y solo si este coincide con el del usuario que lo va a borrar la operación es permitida.

```Typescript
async showGroups() {
    this.groups.showGroups();
}
async createGroup() {
  const answer = await inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Introduce el id del grupo",
    },
    {
      name: "name",
      type: "input",
      message: "Introduce el nombre del grupo",
    },
  ]);
  answer.id = parseInt(answer.id);
  if (this.groups.getGroupById(answer.id))
    return console.log("El grupo ya existe");
  else {
    const group = new Group(
      answer.id,
      answer.name,
      [],
      [],
      [],
      [],
      this.user.id
    );
    this.groups.addItem(group);
    console.log("Grupo creado correctamente");
  }
}
async deleteGroup() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    answer.id = parseInt(answer.id);
    const group = this.groups.getGroupById(answer.id);
    if (group) {
      if (this.user.id === group.Owner) {
        this.groups.removeItem(answer.id);
        console.log("Grupo eliminado correctamente");
      } else {
        console.log("No eres el propietario del grupo");
      }
    } else {
      console.log("El grupo no existe");
    }
  }
```
Ejemplo de funcionamiento:
```
```

Entre otras funciones que hemos creado y añadido dentro de esta clase con el fin de gestionar la información dentro del sistema.
## Conclusiones
La realización de esta práctica en grupo nos ha permitido aunar todos los conocimientos que hemos adquirido en la asginatura hasta este punto, con la adición de dos herramientos de gran utilidad como lo son _Inquirer.js_ y _Lowdb_. La primera de ellas permitiendonos crear una línea de comandos interactiva de una forma mucho más cómod que usando simplemente _prompt()_ y la segunda nos da la opción de modificar los objetos que se encuentran un una base de datos (_json_), consiguiendo así guardar los cambios y estos no hagan _reset_ cada vez que ejecutamos el programa.
\
\
Github Actions.

## Bibliografía
[Guion de la práctica 7](https://ull-esit-inf-dsi-2223.github.io/prct07-destravate-dataModel/)
[Documentación Inquirer.js](https://www.npmjs.com/package/inquirer#documentation)
[Documentación Lowdb](https://www.npmjs.com/package/lowdb)
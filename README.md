# Práctica 7 - Modelo de datos de un sistema de información que permite almacenar registros de actividades deportivas
Esta práctica consiste en la realización de un sistema de información que permita almacenar registros de actividades deportivas.
\
\
Esta práctica se ha realizado en grupo por los siguientes alumnos:
- Pablo de la Fuente Rodríguez (alu0101336152@ull.edu.es) 
- José David Mur Álvarez (alu0101052168@ull.edu.es)
- Carlos Pío Reyes (alu0101132945@ull.edu.es)
## Requisitos del sistema
Para la creación de este sistema se proponen 4 elementos fundamentales: Rutas, Usuarios, Grupos y Retos.
\
\
Para cada uno de estos elementos se ha creado su correspondiente clase, con los atributos y métodos indicados en el guion de la práctica. El código fuente de cada cada una de las clases se ha orgazinado en su propio fichero, utilizando la sintaxis ES para importar/exportar las diferentes entidades. Además de utilizar la documentación TypeDoc y sus respectivas pruebas en la carpeta _test_.
\
\
Estas cuatro clases son las siguientes:
### Routes
Esta clase almacena una ruta en el sistema con los atributos definidos en el enunciado, además posee unos métodos para devolver esos valores y un método para imprimir esa información por pantalla.
```TypeScript
/**
 * Routes that are include in the system.
 */
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

  /**
   * Routes' constructor.
   * @param id Route id.
   * @param name Route name.
   * @param startCoords Start geolocation. 
   * @param endCoords End geolocation.
   * @param length Routes length (Kms).
   * @param avarageSlope Avarage slope of the route.
   * @param activityType Indicate if the route can be completed by bike or running.
   * @param rating Avarage route rating.
   */
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

  /**
   * Get route name.
   * @returns Route name.
   */
  getName() {
    return this.name;
  }

  /**
   * Get amount of users.
   * @returns users quantity.
   */
  getUsersQuantity() {
    return this.usersIds.length;
  }

  /**
   * Get routes length (Kms).
   * @returns Routes length (Kms).
   */
  getLength() {
    return this.length;
  }

  /**
   * Get route activity.
   * @returns Activity type.
   */
  getActivityType() {
    return this.activityType;
  }

  /**
   * Get route rating.
   * @returns Avarage route rating.
   */
  getRating() {
    return this.rating;
  }

  /**
   * Print the route.
   * @returns The string with the result.
   */
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
Se han realizado las pruebas pertinentes:
```
  getName() function test
    ✔ route1.getname() returns 'Teide'
    ✔ route8.getname() returns 'Bodegas'

  getUsersQuantity() function test
    ✔ route2.getUsersQuantity() returns 2
    ✔ route5.getUsersQuantity() returns 4

  getLength() function test
    ✔ route3.getLength() returns 8
    ✔ route10.getLength() returns 2

  getActivityType() function test
    ✔ route3.getActivityType() returns 'corriendo'
    ✔ route10.getActivityType() returns 'bicicleta'

  getRating() function test
    ✔ route7.getRating() returns 8.7
    ✔ route9.getRating() returns 9.7

  print() function test
    ✔ route8.print() returns print8
    ✔ route5.print() returns print5
```
### Users
Esta clase define un usuario del sistema, aparte de los atributos que se nos proporcionan y los metodos correspondientes para obtener esos datos, la clase user nos permite borrar o añadir usuarios a la lista de amigos.
```TypeScript
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
    return str;
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
```
Se han realizado las pruebas pertinentes:
```
  getStats() function test
    ✔ user1.getStats() returns 'stats1'

  getName() function test
    ✔ user1.getName() returns 'Ana'

  statsPrint() function test
    ✔ user1.statsPrint() returns 'statsPrint1'

  print() function test
    ✔ user1.print() returns 'print1'

  routeHistoryPrint() function test
    ✔ user1.routeHistoryPrint() returns 'routeHistory'
```
### Groups
Esta clase representa un grupo de usuarios del sistema, con sus métodos podemos obtener sus atributos, mostrarlos por pantalla, mostrar los usuarios que componen el grupo y sus rutas favoritas y añadir usuarios al grupo.
```TypeScript
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
```
Se han realizado las pruebas pertinentes:
```
  getName() function test
    ✔ group1.getName() returns 'Los Caminantes'
    ✔ group2.getName() returns 'Senderistas en Acción'

  getStats() function test
    ✔ group4.getStats() returns 'Los Caminantes'
    ✔ group5.getStats() returns 'Senderistas en Acción'

  getNumberOfMembers() function test
    ✔ group4.getNumberOfMembers() returns 'Los Caminantes'
    ✔ group5.getNumberOfMembers() returns 'Senderistas en Acción'

  statsPrint() function test
    ✔ group3.statsPrint() returns print3

  print() function test
    ✔ group3.print() returns print3
```
### Challenges
Esta clase que representa los retos del sistema, tiene métodos que nos devuelve sus atributos y un método que muestra toda la información del reto por pantalla.
_Challenge_:
```TypeScript
/**
 * Challenges that are included in the system.
 */
export class Challenge {
  private id: number;
  private name: string;
  public routes: Route[];
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
    for (const element of this.routes) {
      this.totalKms += element.length;
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
```
Se han realizado las pruebas pertinentes:
```
  getName() function test
    ✔ chall1.getName() returns 'Tres Cumbres'
    ✔ chall2.getName() returns 'Vuelta Tenerife'

  getTotalKms() function test
    ✔ chall1.getTotalKms() returns 33
    ✔ chall3.getTotalKms() returns 31

  getNumberOfUser() function test
    ✔ chall1.getNumberOfUser() returns 3
    ✔ chall2.getNumberOfUser() returns 2

  print() function test
    ✔ chall1.print() returns print1
    ✔ chall2.print() returns print2
```
Para posteriormente comprobar el funcionamiento se deberán de crear varios objetos distintos de las clases anteriormente mencionadas es por ello que hemos decidido organizarlo en colecciones. Comenzando por una clase abstracta _collection_ que es heredada por las colecciones del resto de elementos.
### Collection:
```TypeScript
/**
 * The abstract class collection of items. Generic class.
 */
export abstract class Collection<T> {
  /**
   * Constructor's class.
   * @param items Array of items of generic's type.
   */
  constructor(protected items: T[]) {   
  }

  /**
   * Remove an item from the collection.
   * @param index index of an item of the collection.
   * @returns the removed item.
   */
  removeItem(index: number): T {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
  }

  /**
   * Add an item to the collection.
   * @param newItem the new item to add to the collection.
   * @returns True if the item was added.
   */
  addItem(newItem: T) {
    this.items.push(newItem);  
    return true;
  }

  /**
   * Get an item to the collection.
   * @param index index item to get from the collection.
   * @returns the item selected.
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Get the number of items from the collection.
   * @returns the number of items.
   */
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
### RoutesCollection:
```TypeScript
/**
 * Route collection extended from abstract class Colection.
 */
export class RouteCollection extends Collection<Route> {
  /**
   * Constructor's class.
   * @param routes array of routes.
   */
  constructor(routes: Route[]) {
    super(routes);
  }

  /**
   * Sort routes based on name alphabetically in ascending order.
   * @returns the routes collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort routes based on name alphabetically in descending order.
   * @returns the routes collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort routes based on the amount of users in ascending order.
   * @returns the routes collection sorted. 
   */
  usersQuantitySortAscend() {
    return this.items.sort((a, b) => a.getUsersQuantity() - b.getUsersQuantity());
  }

  /**
   * Sort routes based on the amount of users in descending order.
   * @returns 
   */
  usersQuantitySortDescend() {
    return this.items.sort((a, b) => b.getUsersQuantity() - a.getUsersQuantity());
  }

  /**
   * Sort routes based on the Route's length is ascending order.
   * @returns the routes collection sorted. 
   */
  lengthSortAscend() {
    return this.items.sort((a, b) => a.getLength() - b.getLength());
  }

  /**
   * Sort routes based on the Route's length is descending order.
   * @returns the routes collection sorted. 
   */
  lengthSortDescend() {
    return this.items.sort((a, b) => b.getLength() - a.getLength());
  }

  /**
   * Sort routes based on the rating in ascending order.
   * @returns the routes collection sorted. 
   */
  ratingSortAscend() {
    return this.items.sort((a, b) => a.getRating() - b.getRating());
  }

  /**
   * Sort routes based on the rating in descending order.
   * @returns the routes collection sorted. 
   */
  ratingSortDescend() {
    return this.items.sort((a, b) => b.getRating() - a.getRating());
  }

  /**
   * Sort routes based on the activity (bike).
   * @returns the routes collection sorted. 
   */
  bikeActivitySort() {
    return this.items.sort((a,b) => a.getActivityType().localeCompare(b.getActivityType()) )
  }

  /**
   * Sort routes based on the activity (running).
   * @returns the routes collection sorted. 
   */
  runningActivitySort() {
    return this.items.sort((a,b) => b.getActivityType().localeCompare(a.getActivityType()) )
  }
  
  /**
   * Get the length collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  /**
   * Function that print the names and ids of the routes
   */
  printNames(){
    this.items.forEach(route => {
        console.log(route.getId(), route.getName())
    });
  }

  /**
   * Get a route by it's id
   * @param id id of the route
   * @returns A route find by it's id
   */
  getRouteById(id: number){
    return this.items.find((route) => route.getId() === id);
  }
}
```
Se han realizado las pruebas pertinentes:
```
  alphabeticNameSortAscend() function test
    ✔ routeCol.alphabeticNameSortAscend() returns [route2, route1]

  alphabeticNameSortDescend() function test
    ✔ routeCol.alphabeticNameSortDescend() returns [route1, route2]

  usersQuantitySortAscend() function test
    ✔ routeCol.usersQuantitySortAscend() returns [route2, route1]

  usersQuantitySortDescend() function test
    ✔ routeCol.usersQuantitySortDescend() returns [route1, route2]

  lengthSortAscend() function test
    ✔ routeCol.lengthSortAscend() returns [route2, route1]

  lengthSortDescend() function test
    ✔ routeCol.lengthSortDescend() returns [route1, route2]

  ratingSortAscend() function test
    ✔ routeCol.ratingSortAscend() returns [route2, route1]

  ratingSortDescend() function test
    ✔ routeCol.ratingSortDescend() returns [route1, route2]

  bikeActivitySort() function test
    ✔ routeCol2.bikeActivitySort() returns [route1, route3]

  runningActivitySort() function test
    ✔ routeCol2.runningActivitySort() returns [route3, route1]

  getLength() function test
    ✔ routeCol.getLength() returns 2
```
### UsersCollection:
```TypeScript
/**
 * User collection extended from abstract class Colection.
 */
export class UserCollection extends Collection<User> {
  constructor(users: User[]) {
    super(users)
  }

  /**
   * Sort users based on names alphabetically in ascending order.
   * @returns the user collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort users based on names alphabetically in descending order.
   * @returns 
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort users based on Kms per week in ascending order.
   * @returns 
   */
  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  /**
   * Sort users based on Kms per week in descending order.
   * @returns 
   */
  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  /**
   * Sort users based on Kms per month in ascending order.
   * @returns 
   */
  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  /**
   * Sort users based on Kms per month in descending order.
   * @returns 
   */
  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  /**
   * Sort users based on Kms per year in ascending order.
   * @returns 
   */
  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  /**
   * Sort users based on Kms per year in descending order.
   * @returns 
   */
  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  /**
   * Get the length collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  /**
   * Get a user by it's id
   * @param id id of the user
   * @returns a user find by it's id
   */
  getUserbyId(id: number) {
    return this.items.find((user) => user.id === id);
  }

  /**
   * show all the users of the database
   */
  showUsers() {
    this.items.forEach((user) => {
      console.log(user.id);
    });
  }
};
```
Se han realizado las pruebas pertinentes:
```
  alphabeticNameSortAscend() function test
    ✔ userCol.alphabeticNameSortAscend() returns [user1, user2]

  alphabeticNameSortDescend() function test
    ✔ userCol.alphabeticNameSortDescend() returns [user2, user1]

  kmsSortAscendWeek() function test
    ✔ userCol.kmsSortAscendWeek() returns [user1, user2]

  kmsSortDescendWeek() function test
    ✔ userCol.kmsSortDescendWeek() returns [user2, user1]

  kmsSortAscendMonth() function test
    ✔ userCol.kmsSortAscendMonth() returns [user2, user1]

  kmsSortDescendMonth() function test
    ✔ userCol.kmsSortDescendMonth() returns [user1, user2]

  kmsSortAscendYear() function test
    ✔ userCol.kmsSortAscendYear() returns [user1, user2]

  kmsSortDescendYear() function test
    ✔ userCol.kmsSortDescendYear() returns [user2, user1]

  getLength() function test
    ✔ userCol.getLength() returns 2
```
### GroupCollection:
```TypeScript
import { Group } from "./group";
import { Collection } from "./collection";

/**
 * Group collection extended from abstract class Colection.
 */
export class GroupCollection extends Collection<Group> {
  constructor(groups: Group[]){
    super(groups)
  }

  /**
   * Sort groups based on names alphabetically in ascending order.
   * @returns the group collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort groups based on names alphabetically in descending order.
   * @returns the group collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort groups based on Kms per week in ascending order.
   * @returns the group collection sorted.
   */
  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  /**
   * Sort groups based on Kms per week in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  /**
   * Sort groups based on Kms per month in ascending order.
   * @returns the group collection sorted. 
   */
  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  /**
   * Sort groups based on Kms per month in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  /**
   * Sort groups based on Kms per year in ascending order.
   * @returns the group collection sorted. 
   */
  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  /**
   * Sort groups based on Kms per year in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  /**
   * Sort groups based on the number of members in ascending order.
   * @returns the group collection sorted.
   */
  membersSortAscend() {
    return this.items.sort((a, b) => a.getNumberOfMembers() - b.getNumberOfMembers())
  }

  /**
   * Sort groups based on the number of members in descending order.
   * @returns the group collection sorted. 
   */
  membersSortDescend() {
    return this.items.sort((a, b) => b.getNumberOfMembers() - a.getNumberOfMembers())
  }

  /**
   * Get the length of the collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  /**
   * Get the groups of the collection
   */
  showGroups() {
    this.items.forEach(group => {
      console.log(group.Id, group.getName());
    });
  }

  /**
   * Get a group by it's id
   * @param id id of the group get
   * @returns a group found by his id
   */
  getGroupById(id: number) {
    return this.items.find(group => group.Id === id);
  }

}
```
Se han realizado las pruebas pertinentes:
```
  alphabeticNameSortDescend() function test
    ✔ groupCol.alphabeticNameSortAscend() returns [group2, group1]

  alphabeticNameSortDescend() function test
    ✔ groupCol.alphabeticNameSortDescend() returns [group2, group1]

  kmsSortAscendWeek() function test
    ✔ groupCol.kmsSortAscendWeek() returns [group1, group2]

  kmsSortDescendWeek() function test
    ✔ groupCol.kmsSortDescendWeek() returns [group2, group1]

  kmsSortAscendMonth() function test
    ✔ groupCol.kmsSortAscendMonth() returns [group1, group2]

  kmsSortDescendMonth() function test
    ✔ groupCol.kmsSortDescendMonth() returns [group2, group1]

  kmsSortAscendYear() function test
    ✔ groupCol.kmsSortAscendYear() returns [group1, group2]

  kmsSortDescendYear() function test
    ✔ groupCol.kmsSortDescendYear() returns [group2, group1]

  membersSortAscend() function test
    ✔ groupCol.membersSortAscend() returns [group1, group2]

  membersSortDescend() function test
    ✔ groupCol.membersSortDescend() returns [group2, group1]

  getLength() function test
    ✔ groupCol.getLength() returns 5
```
### ChallengeCollection:
```TypeScript
/**
 * Challenge collection extended from abstract class Colection.
 */
export class ChallengeCollection extends Collection<Challenge> {
  /**
   * Constructor's class.
   * @param challenges array of challenges.
   */
  constructor(challenges: Challenge[]){
    super(challenges);
  }
  
  /**
   * Sort challenges based on names alphabetically in ascending order.
   * @returns the challenge collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort challenges based on names alphabetically in descending order.
   * @returns the challenge collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName())* (-1));
  }

  /**
   * Sort challenges based on Kms in ascending order.
   * @returns the challenge collection sorted.
   */
  kmsSortAscend() {
    return this.items.sort((a, b) => a.getTotalKms() - b.getTotalKms());
  }

  /**
   * Sort the challenges based on Kms in descending order.
   * @returns the challenge collection sorted.
   */
  kmsSortDescend() {
    return this.items.sort((a, b) => b.getTotalKms() - a.getTotalKms());
  }

  /**
   * Sort the challenges based on the number of users in ascending order.
   * @returns the challenge collection sorted.
   */
  userSortAscend() {
    return this.items.sort((a, b) => a.getNumberofUser() - b.getNumberofUser())
  }

  /**
   * Sort the challenges based on the number of users in descending order.
   * @returns the challenge collection sorted,
   */
  userSortDescend() {
    return this.items.sort((a, b) => b.getNumberofUser() - a.getNumberofUser())
  }

  /**
   * Get the length collection.
   * @returns the length collection.
   */
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
### Database:
```TypeScript
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
\
\
Son cuatro las funciones que implementa este fichero:
* Mostrar elemento (Ruta, Usuario, Grupo o Reto)
* Añadir elemento
* Modificar elemento
* Borrar elemento
\
\
Es este informe no mostraremos todas las combinaciones posibles que se pueden realizar debido a su extensión, sin embargo, si mostraremos el correcto funcionamiento de cada una de ellas.
\
\
El funcionamiento de todas las partes consiste que hacer una constante con las preguntas que posteriormente le pasaremos al inquirer y dentro de este _switches_ anidados para entrar en la parte del código que seleccione el usuario.
### Mostrar Elemento
En el guion de la práctica se nos pide poder ordenar los elementos de las colecciones de múltiples formas distintas, para esto se hace uso de los métodos declarados anteriormente en cada una de las colecciones. A continuación veremos un ejemplo de ello:
```
? ¿Qué quiere hacer? Mostrar elemento
? ¿Qué elemento desea elegir? Retos
? ¿De qué forma desea mostrar los retos? Por cantidad de Kms que se deben realizar
? ¿De forma ascendente o descendente? Ascendente
Id: 3
Nombre: Estrellas
Rutas: Bodegas, Molinos
Actividad: bicicleta
Kms: 31
Usuarios: Sofía, Carlos, José, Pablo, Miguel
-------
Id: 1
Nombre: Tres Cumbres
Rutas: Teide, Sentidos, Caldera
Actividad: bicicleta
Kms: 33
Usuarios: Ana, María, Laura
-------
Id: 2
Nombre: Vuelta Tenerife
Rutas: Guanches, Acantilados, Lavas, Bosques, Pueblos
Actividad: corriendo
Kms: 41
Usuarios: Juan, Luis
```
Podemos ver como se muestran los retos ordenados de forma ascendente en cuanto a los Kms que se deben realizar se refiere.
```TypeScript
...
inquirer.prompt(sortMenu).then(answer => {
  switch (answer.option) {
    case 'asc':
      for (let i = 0; i < routeCol.getLength(); i++) {                           
        console.log(routeCol.alphabeticNameSortAscend()[i].print());
        console.log('-------');
      }
    break;
...
```
Esa sería la parte del código que ejecuta lo anterior, haciendo llamada a _alphabeticNameSortAscend()_ e imprimiéndolo por pantalla.
### Añadir Elemento
Desde esta opción se nos permite añadir uno de los elementos seleccionados con los datos introducidos por pantalla en la base de datos. Un ejemplo de uso es el siguiente:
```
? ¿Qué quiere hacer? Añadir elemento
? ¿Qué elemento desea elegir? Retos
? Introduzca el id del reto:  4
? Introduzca el nombre del reto:  Nuevo Reto
? Introduzca el id de las rutas que desea añadir separado por comas:  101, 103, 105
? Introduzca el tipo de actividad de la ruta (bicicleta o corriendo):  corriendo
? Introduzca el id de los usuarios que desea añadir separado por comas:  201, 202
```
Antes de ejecutar el programa solo nos aparece en la base de datos los 3 restos creados inicialmente, tras esto, se añade lo siguiente a la base de datos:
```JSON
{
  "id": 1,
  "name": "Tres Cumbres",
  //...
}
{
  "id": 2,
  "name": "Vuelta Tenerife",
  //...
}
{
  "id": 3,
  "name": "Estrellas",
  //...
}
{
  "id": 4,
  "name": "Nuevo Reto",
  //...
}
```
El código que nos permite añadir un reto a la base de datos es el siguiente:
```TypeScript
case 'challenge':
  inquirer.prompt(addChallMenu).then(answer => {
    const vector2: Route[] = [];
    const vector3: User[] = [];
    const vector = answer.routes.split(',').map((v) => Number(v.trim()));
      for (let i = 0; i < vector.length; i++) {
        vector2.push(db.get('routeCol.items').find({ id: vector[i]}).value());
      }
    const vector5 = answer.users.split(',').map((v) => Number(v.trim()));

      for (let i = 0; i < vector5.length; i++) {
        vector3.push(db.get('userCol.items').find({id: vector5[i]}).value());
      }
    const newChall = new Challenge(Number(answer.id), answer.name, vector2, answer.activity, vector3);
    
    challCol.addItem(newChall);
    db.get('challCol.items').push(newChall).write();
  });
  break;
```
Consiste en ir creando el objeto en base a las respuestas de usuario por la línea de comandos interactiva para posteriormente añadirlas a la base de datos.
### Modificar Elemento
Este opción nos da la posibilidad de elgir uno de los elementos existentes en la base de datos y modificar sus atributos. Un ejemplo es el siguiente:
```
? ¿Qué quiere hacer? Modificar elemento
? ¿Qué elemento desea elegir? Rutas
? Id del elemento que desea modificar:  102
? Introduzca el id de la ruta:  102
? Introduzca el nombre de la ruta:  Nueva Ruta
? Introduzca las coordenadas x de inicio de la ruta:  13.54
? Introduzca las coordenadas y de inicio de la ruta:  14.76
? Introduzca las coordenadas x finales de la ruta:  14.23
? Introduzca las coordenadas y finales de la ruta:  15.67
? Introduzca la longitud de la ruta en kilómetros:  17
? Introduzca el desnivel medio de la ruta:  900
? Introduzca el id de los usuario que han realizado la ruta separados por comas:  202, 203
? Introduzca el tipo de actividad de la ruta (bicicleta o corriendo):  corriendo
? Introduzca la calificación media de la ruta:  8.6
```
Una vez hecho esto, si le echamos un vistazo a la base de datos, podemos ver como la anterior ruta 102 ha desaparecido y ha sido sustituida por las modificaciones que indicamos anteriormente por teclado.
```JSON
{
  "id": 101,
  "name": "Teide",
  //...
}
{
  "id": 102,
  "name": "Nueva Ruta",
  "startCoords": {
    "x": 13.54,
    "y": 14.76
  },
  "endCoords": {
    "x": 14.23,
    "y": 15.67
  },
  "length": 17,
  "avarageSlope": 900,
  "usersIds": [
    202,
    203
  ],
  "activityType": "corriendo",
  "rating": 8.6
}
{
  "id": 103,
  "name": "Lavas",
  //...
}
//...
```
El código encargado de lo mostrado anteriormente es el siguiente:
```TypeScript
case 'route':
  inquirer.prompt(modify).then(answer => {  
    if (db.get('routeCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
      db.get('routeCol.items').remove({ id: Number(answer.id) }).write();
      inquirer.prompt(addRouteMenu).then(answer => {
        const vector = answer.uids.split(',').map((v) => Number(v.trim()));
        const sCoords: coords = {x: Number(answer.scoordsx), y: Number(answer.scoordsy)};
        const eCoords: coords = {x: Number(answer.ecoordsx), y: Number(answer.ecoordsy)};
        const newRoute = new Route(Number(answer.id), answer.name, sCoords, eCoords, Number(answer.length), Number(answer.slope), vector, answer.activity, Number(answer.rating));
        
        routeCol.addItem(newRoute);
        db.get('routeCol.items').push(newRoute).write();
      });
    } else {
      console.log("El elemento no está en la base de datos.")
    }  
  });
  break;
```
Sigue un espíritu muy similar al apartado de añadir elemento.
### Borrar Elemento
Este apartado simplemente se indica por pantala el id del elemento que desea ser borrado y se elimina de la base de datos. Como ejemplo tenemos el siguiente:
```
? ¿Qué quiere hacer? Borrar elemento
? ¿Qué elemento desea elegir? Rutas
? Id del elemento que desea borrar:  102
```
Ahora si observamos la base de datos, veremos que la ruta que habíamos creado en el apartado anterior está borrada.
```JSON
{
  "id": 101,
  "name": "Teide",
  //...
}
{
  "id": 103,
  "name": "Lavas",
  //...
}
...
```
El código encargado de borrar el elemento de la base de datos es el siguiente:
```TypeScript
inquirer.prompt(remove).then(answer => {                  
  if (db.get('routeCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
    db.get('routeCol.items').remove({ id: Number(answer.id) }).write();
  } else {
    console.log("El elemento no está en la base de datos.")
  }  
});
```
Consiste en comprobar que el elemento cuya id desea eliminar el usuario se encuentra en la base de dato y si es así, lo borramos y escribimos la base de datos.
## Clase Gestor
Para la clase gestor también se ha hecho uso de _Inquirer.js_ lo que nos permite hacer uso de la linea de comandos interactiva para poder hacer operaciones de gestion en la base de datos que se indican en el enunciado, que son:
\
\
**Registrarse en el sistema**. Los usuarios que se conectan por primera vez al sistema deberan registrarse en el mismo para crear un usuario nuevo con sus datos, ademas para que una persona pueda volver a conectarse y usar su usuario en el sistema tambien hemos implementado un metodo _log in_, que comprueba que estés registrado y si es así te permite hacer uso de las funciones del sistema con tu usuario.
```Typescript
  /**
   * Function to sign in the management
   */
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
    if (this.users.getUserbyId(parseInt(answer.id))) {
      console.log("El usuario ya existe");
      return;
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

  /**
   * Function to log in the management
   */
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
    }
  }
```
Ejemplo de funcionamiento:
 - Sign In:
```
? ¿Qué desea hacer? Registrarse en el sistema
? Introduce tu id 500
? Introduce tu nombre Alberto
? Introduce tu actividad Correr
Usuario creado correctamente
```
- Log In:
```
? ¿Qué desea hacer? Iniciar sesión en el sistema
? Introduce tu id 201
Bienvenido
```
**Visualizar todas las rutas existentes dentro del sistema**. Este método imprime una lista por pantalla de todas las rutas con sus ids y luego nos permite escoger una de entre estas y mostrar todos sus datos.

```Typescript
  /**
   * Function to show the routes of the database and to choose one and show all his information
   */
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
      console.log(this.routes.getRouteById(answer.id).print());
    } else {
      console.log("La ruta no existe.");
    }
  }
```
Ejemplo de funcionamiento:
```
? ¿Qué desea hacer? Ver rutas
101 Teide
102 Sentidos
103 Lavas
104 Acantilados
105 Caldera
106 Guanches
107 Bosques
108 Bodegas
109 Molinos
110 Pueblos
? Introduce el numero de la ruta de la que quieres obtener informacion: 101
Id: 101
    Nombre: Teide
    Geolocalización de inicio: 28.4894, 16.3168
    Geolocalización del final: 28.4841, 16.2337
    Longitud de la ruta: 18 kilómetros
    Desnivel medio de la ruta: 1000 metros
    Ids de los usuarios que han realizado la ruta: 201, 203, 207, 209
    Actividad: bicicleta
    Calificación media: 9.8
```
**Ver usuarios**. Este metodo nos permite ver todos los usuarios del sistema haciendo uso del metodo _showUsers()_ de **UsersCollection**.
```Typescript
/**
   * Function to show the database's users 
   */
  async showUsers() {
    this.users.showUsers();
  }
```

Ejemplo de Funcionamiento:
```
? ¿Qué desea hacer? Ver usuarios
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
```

**Añadir y borrar amigos**. Con estos dos metodos podemos añadir y borrar amigos, en los dos casos comprobando que el usuario al que queremos
añadir o borrar existe y no se encuentre o se encuentre en nuestra lista de amigos, respectivamente.
```Typescript
/**
   * Function to add a user as a Friend
   */
  async addFriend() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres añadir como amigo",
      },
    ]);
    answer.id = parseInt(answer.id);
    const user = this.users.getUserbyId(answer.id);
    if (user) {
      if (this.user.friends.includes(answer.id)) {
        console.log("Ya eres amigo de este usuario");
        return;
      } else {
        this.user.addFriend(answer.id);
        user.addFriend(this.user.id);
        console.log("Amigo añadido correctamente");
      }
    } else {
      console.log("El usuario no existe");
    }
  }

  /**
   * Function to delete a user as a friend
   */
  async deleteFriend() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres eliminar como amigo",
      },
    ]);
    answer.id = parseInt(answer.id);
    const user = this.users.getUserbyId(answer.id);
    if (user) {
      if (!this.user.friends.includes(answer.id)) {
        console.log("No eres amigo de este usuario");
        return;
      } else {
        this.user.deleteFriend(answer.id);
        user.deleteFriend(this.user.id);
        console.log("Amigo eliminado correctamente");
      }
    } else {
      console.log("El usuario no existe");
    }
  }
```

Ejemplo de Funcionamiento:
```
? ¿Qué desea hacer? Añadir amigo
? Introduce el id del usuario que quieres añadir como amigo 202
Ya eres amigo de este usuario
? ¿Qué desea hacer? Añadir amigo
? Introduce el id del usuario que quieres añadir como amigo 219
Amigo añadido correctamente

? ¿Qué desea hacer? Borrar amigo
? Introduce el id del usuario que quieres eliminar como amigo 202
Amigo eliminado correctamente
```

**Unirse a un grupo existente**. Este método añade al usuario dentro de un grupo ya existente haciendo uso del metodo del grupo _addUser()_.

```Typescript
  /**
   * Function that make the user join a group
   */
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
? ¿Qué desea hacer? Unirse a grupo
? Introduce el id del grupo al que quieres unirte 301
Te has unido al grupo correctamente
```
**Visualizar, crear y borrar grupos**. Con estos métodos podemos ver los grupos que hay en el sistema, crear un nuevo grupo dentro del sistema o borrar los grupos que ya existan, esto último teniendo en cuenta que solo se puede hacer si el usuario es el creador del grupo, para ello el grupo guarda el id de su creador, y solo si este coincide con el del usuario que lo va a borrar la operación es permitida.

```Typescript
  /**
   * Function that shows groups of the database
   */
  async showGroups() {
    this.groups.showGroups();
  }

  /**
   * Function that create a new group
   */
  async createGroup() {
    const answer = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
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

  /**
   * Function that delete an existing group
   */
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
- Ver Grupos:
```
? ¿Qué desea hacer? Ver grupos
301 Los Caminantes
302 Senderistas en Acción
303 Exploradores de la Naturaleza
304 Pasos de Montaña
305 Andarines Aventureros
```

- Crear Grupo:
```
? ¿Qué desea hacer? Crear grupo
? Introduce el id del grupo 25
? Introduce el nombre del grupo BobCats
Grupo creado correctamente
? ¿Qué desea hacer? Ver grupos
301 Los Caminantes
302 Senderistas en Acción
303 Exploradores de la Naturaleza
304 Pasos de Montaña
305 Andarines Aventureros
25 BobCats
```

- Borrar Grupo:
```
? ¿Qué desea hacer? Borrar grupo
? Introduce el id del grupo 25
Grupo eliminado correctamente
? ¿Qué desea hacer? Ver grupos
301 Los Caminantes
302 Senderistas en Acción
303 Exploradores de la Naturaleza
304 Pasos de Montaña
305 Andarines Aventureros
```

Entre otras funciones que hemos creado y añadido dentro de esta clase con el fin de gestionar la información dentro del sistema.
\
\
También se han hecho una serie de pruebas para la clase gestor:
```
  Management Test
    ✔ log in
    ✔ log in error
    ✔ sign in
    ✔ sign in error
    ✔ should show all users
    ✔ should print a route
    ✔ should print a route error
    ✔ should show all groups
    ✔ addFriend
    ✔ addFriend error
    ✔ addFriend user not exist
    ✔ deleteFriend
    ✔ deleteFriend error
    ✔ deleteFriend user not exist
    ✔ joinGroup
    ✔ joinGroup error
    ✔ CreateGroup
    ✔ CreateGroup error
    ✔ deleteGroup
    ✔ deleteGroup error
    ✔ deleteGroup not owner
    ✔ start method exit
    ✔ options method exit
```


## Conclusiones
La realización de esta práctica en grupo nos ha permitido aunar todos los conocimientos que hemos adquirido en la asginatura hasta este punto, con la adición de dos herramientos de gran utilidad como lo son _Inquirer.js_ y _Lowdb_. La primera de ellas permitiendonos crear una línea de comandos interactiva de una forma mucho más cómod que usando simplemente _prompt()_ y la segunda nos da la opción de modificar los objetos que se encuentran un una base de datos (_json_), consiguiendo así guardar los cambios y estos no hagan _reset_ cada vez que ejecutamos el programa.
\
\
También hemos incluido las herramientas que aprendidas durante todas estas últimas prácticas, como lo es el cubrimiento con Instanbul:
```
------------------------|---------|----------|---------|---------|-----------------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s           
------------------------|---------|----------|---------|---------|-----------------------------
All files               |   93.51 |    73.77 |     100 |   92.55 |                             
 challenge.ts           |     100 |      100 |     100 |     100 |                             
 challengecollection.ts |     100 |      100 |     100 |     100 |                             
 collection.ts          |     100 |      100 |     100 |     100 |                             
 database.ts            |     100 |      100 |     100 |     100 |                             
 group.ts               |     100 |      100 |     100 |     100 |                             
 groupcollection.ts     |     100 |      100 |     100 |     100 |                             
 management.ts          |   77.23 |       60 |     100 |   77.23 | 70-78,83-85,111-133,138-140 
 route.ts               |     100 |      100 |     100 |     100 |                             
 routescollection.ts    |     100 |      100 |     100 |     100 |                             
 users.ts               |     100 |      100 |     100 |     100 |                             
 usersollection.ts      |     100 |      100 |     100 |     100 |                             
------------------------|---------|----------|---------|---------|-----------------------------
```
Se ha incluido por primera vez en los informes de la asignatura la integración continua mediante GitHub Actions, pasando todos los test de forma satisfactoria y consiguiendo el siguiente _badge_:
[![Test](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupo/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupo/actions/workflows/node.js.yml)
\
\
También se ha hecho la configuración de workflow de GitHub Actions para enviar la información de encubrimiento a Coveralls:
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupo/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-groupo?branch=main)

## Bibliografía
[Guion de la práctica 7](https://ull-esit-inf-dsi-2223.github.io/prct07-destravate-dataModel/)\
[Documentación Inquirer.js](https://www.npmjs.com/package/inquirer#documentation)\
[Documentación Lowdb](https://www.npmjs.com/package/lowdb)\
[Documentación GitHub Action](https://docs.github.com/en/actions)\
[Sonar-Cloud](https://www.sonarsource.com/products/sonarcloud/)
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
_Routes_:
```TypeScript
```
_Users_:
```TypeScript
```
_Groups_:
```TypeScript
```
_Challenge_:
```TypeScript
```
Para posteriormente comprobar el funcionamiento se deberán de crear varios objetos distintos de las clases anteriormente mencionadas es por ello que hemos decidido organizarlo en colecciones. Comenzando por una clase abstracta _collection_ que es heredada por las colecciones del resto de elementos.
\
\
_Collecion_:
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
El resto de clases _collection_ que heredan de la anterior son las siguientes:
\
\
_RoutesCollection_:
```TypeScript
```
_UsersCollection_:
```TypeScript
```
_GroupCollection_:
```TypeScript
```
_ChallengeCollection_:
```TypeScript
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
Para la clase gestor también se ha hecho uso de _Inquirer.js_

## Conclusiones
La realización de esta práctica en grupo nos ha permitido aunar todos los conocimientos que hemos adquirido en la asginatura hasta este punto, con la adición de dos herramientos de gran utilidad como lo son _Inquirer.js_ y _Lowdb_. La primera de ellas permitiendonos crear una línea de comandos interactiva de una forma mucho más cómod que usando simplemente _prompt()_ y la segunda nos da la opción de modificar los objetos que se encuentran un una base de datos (_json_), consiguiendo así guardar los cambios y estos no hagan _reset_ cada vez que ejecutamos el programa.
\
\
Github Actions.

## Bibliografía
[Guion de la práctica 7](https://ull-esit-inf-dsi-2223.github.io/prct07-destravate-dataModel/)
[Documentación Inquirer.js](https://www.npmjs.com/package/inquirer#documentation)
[Documentación Lowdb](https://www.npmjs.com/package/lowdb)
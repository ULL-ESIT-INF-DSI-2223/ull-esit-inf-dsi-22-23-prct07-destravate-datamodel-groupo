import { Challenge } from "./challenge";
import { ChallengeCollection } from "./challengecollection";


import { Route } from "./route";
import { coords } from "./route";
import { routeHistory } from "./users";

import { User } from "./users"
import { stats } from "./users";
import { UserCollection } from "./usersollection";


import { inquirer } from "inquirer"
import { RouteCollection } from "./routescollection";

const sCoords: coords = {x: 28.4894, y: 16.3168};
const eCoords: coords = {x: 28.4841, y: 16.2337};

const route1 = new Route(101, "Teide", sCoords, eCoords, 18, 1000, [201, 203, 207, 209], "bicicleta", 9.8);
const route2 = new Route(102, "Sentidos", sCoords, eCoords, 7, 250, [201, 202], "bicicleta", 7.2);
const route3 = new Route(103, "Lavas", sCoords, eCoords, 8, 600, [204, 206, 207, 208], "corriendo",6.8);
const route4 = new Route(104, "Acantilados", sCoords, eCoords, 10, 500, [205, 210, 211, 212, 215] ,"corriendo", 8.7);
const route5 = new Route(105, "Caldera", sCoords, eCoords, 8, 400, [202, 213, 214, 216] ,"bicicleta", 9.2);
const route6 = new Route(106, "Guanches", sCoords, eCoords, 9, 300, [205, 208, 215] ,"corriendo", 9.7);
const route7 = new Route(107, "Bosques", sCoords, eCoords, 12, 400, [217] ,"corriendo", 8.8);
const route8 = new Route(108, "Bodegas", sCoords, eCoords, 17, 500, [201, 217, 220] ,"bicicleta", 6.2);
const route9 = new Route(109, "Molinos", sCoords, eCoords, 14, 400, [218, 219] ,"bicicleta", 7.7);
const route10 = new Route(110, "Pueblos", sCoords, eCoords, 2, 200, [213, 220] ,"corriendo", 5.4);

const stats1: stats = {kmWeek: 76, slopeWeek: 3200, kmMonth: 354, slopeMonth: 12800, kmYear: 3248, slopeYear: 153600}
const stats2: stats = {kmWeek: 87, slopeWeek: 4900, kmMonth: 248, slopeMonth: 19600, kmYear: 4676, slopeYear: 235200}
const stats3: stats = {kmWeek: 92, slopeWeek: 5100, kmMonth: 378, slopeMonth: 24000, kmYear: 4016, slopeYear: 288000}
const stats4: stats = {kmWeek: 63, slopeWeek: 2700, kmMonth: 292, slopeMonth: 10800, kmYear: 4524, slopeYear: 129600}
const stats5: stats = {kmWeek: 91, slopeWeek: 5000, kmMonth: 324, slopeMonth: 20000, kmYear: 4068, slopeYear: 240000}
const stats6: stats = {kmWeek: 86, slopeWeek: 4700, kmMonth: 384, slopeMonth: 18800, kmYear: 4128, slopeYear: 225600}
const stats7: stats = {kmWeek: 69, slopeWeek: 3000, kmMonth: 226, slopeMonth: 12000, kmYear: 3136, slopeYear: 144000}
const stats8: stats = {kmWeek: 73, slopeWeek: 3200, kmMonth: 252, slopeMonth: 12800, kmYear: 3004, slopeYear: 153600}
const stats9: stats = {kmWeek: 72, slopeWeek: 3100, kmMonth: 328, slopeMonth: 12400, kmYear: 3756, slopeYear: 148800}
const stats10: stats = {kmWeek: 65, slopeWeek: 2900, kmMonth: 290, slopeMonth: 11600, kmYear: 3220, slopeYear: 139200}
const stats11: stats = {kmWeek: 84, slopeWeek: 3800, kmMonth: 366, slopeMonth: 15200, kmYear: 4375, slopeYear: 182400}
const stats12: stats = {kmWeek: 98, slopeWeek: 5400, kmMonth: 352, slopeMonth: 21600, kmYear: 3235, slopeYear: 259200}
const stats13: stats = {kmWeek: 74, slopeWeek: 4100, kmMonth: 276, slopeMonth: 16400, kmYear: 3863, slopeYear: 196800}
const stats14: stats = {kmWeek: 96, slopeWeek: 5200, kmMonth: 334, slopeMonth: 20800, kmYear: 4216, slopeYear: 249600}
const stats15: stats = {kmWeek: 102, slopeWeek: 5800, kmMonth: 408, slopeMonth: 23200, kmYear: 4176, slopeYear: 278400}
const stats16: stats = {kmWeek: 75, slopeWeek: 4000, kmMonth: 312, slopeMonth: 16000, kmYear: 3672, slopeYear: 192000}
const stats17: stats = {kmWeek: 62, slopeWeek: 3100, kmMonth: 276, slopeMonth: 12400, kmYear: 3871, slopeYear: 148800}
const stats18: stats = {kmWeek: 58, slopeWeek: 2600, kmMonth: 272, slopeMonth: 10400, kmYear: 3900, slopeYear: 124800}
const stats19: stats = {kmWeek: 93, slopeWeek: 4700, kmMonth: 322, slopeMonth: 18800, kmYear: 4254, slopeYear: 225600}
const stats20: stats = {kmWeek: 75, slopeWeek: 3800, kmMonth: 298, slopeMonth: 15200, kmYear: 4183, slopeYear: 182400}


const routeHistory1: routeHistory = {
  date: "12/05/2022",
  idRoute: 101
}

const routeHistory2: routeHistory = {
  date: "23/07/2022",
  idRoute: 102
}

const prueba = new User(1, "prueba", "correr", [201, 202], [201, 202], stats1, [101, 102], [1, 3], [routeHistory1, routeHistory2])

const user1 = new User(201, "Ana", "correr", [202, 203], [202], stats1, [101, 102], [1, 3], [routeHistory1, routeHistory2])
const user2 = new User(202, "Juan", "correr", [205, 214, 216], [205, 216], stats2, [107], [2], [routeHistory1, routeHistory2])
const user3 = new User(203, "María", "bicicleta", [201, 206], [201], stats3, [106, 108], [2, 3], [routeHistory1, routeHistory2])
const user4 = new User(204, "Luis", "bicicleta", [220], [220], stats4, [103], [1], [routeHistory1, routeHistory2])
const user5 = new User(205, "Sofía", "correr", [208, 209, 211], [209, 211], stats5, [107, 109, 110], [2], [routeHistory1, routeHistory2])
const user6 = new User(206, "Carlos", "correr", [204, 205, 217, 219, 220], [205, 206, 217], stats6, [105, 107], [1], [routeHistory1, routeHistory2])
const user7 = new User(207, "Laura", "correr", [206, 208, 209, 210], [208, 209], stats7, [103, 106, 108], [1, 2], [routeHistory1, routeHistory2])
const user8 = new User(208, "José", "bicicleta", [201, 213], [201], stats8, [104], [3], [routeHistory1, routeHistory2])
const user9 = new User(209, "Pablo", "bicicleta", [219], [219], stats9, [102, 105], [2, 3], [routeHistory1, routeHistory2])
const user10 = new User(210, "Miguel", "bicicleta", [213, 214], [214], stats10, [106], [], [routeHistory1, routeHistory2])
const user11 = new User(211, "Carmen", "bicicleta", [206, 207, 218], [206, 218], stats11, [107, 108], [1], [routeHistory1, routeHistory2])
const user12 = new User(212, "David", "correr", [211, 212, 215], [212, 215], stats12, [109], [1], [routeHistory1, routeHistory2])
const user13 = new User(213, "Patricia", "bicicleta", [211, 214], [211], stats13, [110], [1, 3], [routeHistory1, routeHistory2])
const user14 = new User(214, "Pedro", "correr", [218, 220], [218], stats14, [105, 107, 108], [1, 2], [routeHistory1, routeHistory2])
const user15 = new User(215, "Paola", "bicicleta", [203, 205, 211], [203, 205], stats15, [104], [2, 3], [routeHistory1, routeHistory2])
const user16 = new User(216, "Jorge", "bicicleta", [204], [204], stats16, [101, 103], [1], [routeHistory1, routeHistory2])
const user17 = new User(217, "Daniela", "correr", [205], [205], stats17, [108], [], [routeHistory1, routeHistory2])
const user18 = new User(218, "Roberto", "correr", [207, 209, 217], [207, 209], stats18, [101, 102, 105], [1, 2], [routeHistory1, routeHistory2])
const user19 = new User(219, "Andrea", "bicicleta", [208, 213], [208, 213], stats19, [105, 108, 109, 110], [2], [routeHistory1, routeHistory2])
const user20 = new User(220, "Eduardo", "correr", [209, 212, 219], [212, 220], stats20, [109, 110], [3], [routeHistory1, routeHistory2])

const chall1 = new Challenge(1, "Tres Cumbres", [route1, route2, route5], "bicicleta");
const chall2 = new Challenge(2, "Vuelta Tenerife", [route6, route4, route3, route7, route10], "corriendo");
const chall3 = new Challenge(3, "Estrellas", [route8, route9], "bicicleta");

const challCol = new ChallengeCollection([chall1, chall2, chall3]);
const routeCol = new RouteCollection([route1, route2, route3, route4, route5, route6, route7, route8, route9, route10]);
const userCol = new UserCollection([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20])

const inquirer = require('inquirer');

const questionsMenu = [
  {
    type: 'list', 
    name: 'option',
    message: '¿Qué quiere hacer?',
    choices: [
      {name: 'Mostrar elemento', value: 'navegation'},
      {name: 'Añadir elemento', value: 'add'},
      {name: 'Modificar elemento', value: 'modify'},
      {name: 'Borar elemento', value: 'delete'}
    ]
  }
]

const optionsMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué elemento desea elegir?',
    choices: [
      {name: 'Rutas', value: 'route'},
      {name: 'Usuarios', value: 'user'},
      {name: 'Grupos', value: 'group'},
      {name: 'Retos', value: 'challenge'}
    ]
  }
]

const routeMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿De qué forma desea mostrar las rutas?',
    choices: [
      {name: 'Alfabéticamente por nombre de la ruta', value: 'alp'},
      {name: 'Cantidad de usuarios que realizan las rutas', value: 'quantity'},
      {name: 'Por longitud de la ruta', value: 'length'},
      {name: 'Por la calificación media de la ruta', value: 'rating'},
      {name: 'Ordenar por actividad', value: 'activity'}
    ]
  }
]

const userMenu = [
  {
    type: 'list',
    name: 'option',
    mesage: '¿De qué forma desea mostrar los usuarios?',
    choices: [
      {name: 'Alfabéticamente por nombre de usuario', value: 'alp'},
      {name: 'Por cantidad de Kms realizados', value: 'kms'}
    ]
  }
]

const challengeMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿De qué forma desea mostrar los retos?',
    choices: [
      {name: 'Alfabéticamente por nombre del reto', value: 'alp'},
      {name: 'Por cantidad de Kms que se deben realizar', value: 'kms'},
      {name: 'Por la cantidad de usuarios que lo están realizando', value: 'user'}
    ]
  }
]

const activityMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿Corriendo o en bicicleta?',
    choices: [
      {name: 'Corriendo', value: 'running'},
      {name: 'Bicicleta', value: 'bike'}
    ]
  }
]

const sortMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿De forma ascendente o descendente?',
    choices: [
      {name: 'Ascendente', value: 'asc'},
      {name: 'Descentente', value: 'desc'}
    ]
  }
]

const dateMenu = [
  {
    type: 'list',
    name: 'option',
    mesage: '¿En base a qué fecha?',
    choices: [
      {name: 'Semana', value: 'week'},
      {name: 'Mes', value: 'month'},
      {name: 'Año', value: 'year'}
    ]
  }
]

const addRouteMenu = [
  {
    type: 'input',
    name: 'id',
    messsage: 'Introduzca el id de la ruta',
  },
  {
    type: 'input',
    name: 'name',
    messsage: 'Introduzca el nombre de la ruta',
  },
  {
    type: 'input',
    name: 'scoords',
    messsage: 'Introduzca las coordenadas de inicio de la ruta',
  },
  {
    type: 'input',
    name: 'ecoords',
    messsage: 'Introduzca las coordenadas finales de la ruta',
  },
  {
    type: 'input',
    name: 'length',
    messsage: 'Introduzca la longitud de la ruta en kilómetros',
  },
  {
    type: 'input',
    name: 'slope',
    messsage: 'Introduzca el desnivel medio de la ruta',
  },
  {
    type: 'editor',
    name: 'uids',
    messsage: 'Introduzca el id de los usuario que han realizado la ruta separados por un salto de línea',
  },
  {
    type: 'input',
    name: 'activity',
    message: 'Introduzca el tipo de actividad de la ruta (bicicleta o corriendo)'
  },
  {
    type: 'input',
    name: 'rating',
    message: 'Introduzca la calificación media de la ruta'
  }
]

//async function main() {

  //let continue = true;
  //while(true) {
  inquirer.prompt(questionsMenu).then(answer => {
    switch (answer.option) {
      case 'navegation':
        inquirer.prompt(optionsMenu).then(answer => {
          switch (answer.option) {
            case 'route':
              inquirer.prompt(routeMenu).then(answer => {
                switch (answer.option) {
                  case 'alp':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < routeCol.getLength(); i++) {                           
                            console.log(routeCol.alphabeticNameSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < routeCol.getLength(); i++) {
                            console.log(routeCol.alphabeticNameSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'quantity':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < routeCol.getLength(); i++) {                           
                            console.log(routeCol.usersQuantitySortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < routeCol.getLength(); i++) {
                            console.log(routeCol.usersQuantitySortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'length':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < routeCol.getLength(); i++) {                           
                            console.log(routeCol.lengthSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < routeCol.getLength(); i++) {
                            console.log(routeCol.lengthSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'rating':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < routeCol.getLength(); i++) {                           
                            console.log(routeCol.ratingSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < routeCol.getLength(); i++) {
                            console.log(routeCol.ratingSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'activity':
                    inquirer.prompt(activityMenu).then(answer => {
                      switch (answer.option) {
                        case 'bike':
                          for (let i = 0; i < routeCol.getLength(); i++) {                           
                            console.log(routeCol.bikeActivitySort()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'running':
                          for (let i = 0; i < routeCol.getLength(); i++) {
                            console.log(routeCol.runningActivitySort()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                }
              });
              //console.log(answer.option);
            break;
            case 'user':
              inquirer.prompt(userMenu).then(answer => {
                switch (answer.option) {
                  case 'alp':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < userCol.getLength(); i++) {                           
                            console.log(userCol.alphabeticNameSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < userCol.getLength(); i++) {
                            console.log(userCol.alphabeticNameSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'kms':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          inquirer.prompt(dateMenu).then(answer => {
                            switch(answer.option) {
                              case 'week':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortAscendWeek()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'month':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortAscendMonth()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'year':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortAscendYear()[i].print());
                                  console.log('-------');
                                } 
                                break;
                            }     
                          });
                          break;
                        case 'desc':
                          inquirer.prompt(dateMenu).then(answer => {
                            switch(answer.option) {
                              case 'week':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortDescendWeek()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'month':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortDescendMonth()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'year':
                                for (let i = 0; i < userCol.getLength(); i++) {
                                  console.log(userCol.kmsSortDescendYear()[i].print());
                                  console.log('-------');
                                } 
                                break;
                            }     
                          });
                          break;
                      }
                    });
                    break;
                }
              });
              break;
            case 'group':
              break;
            case 'challenge':
              inquirer.prompt(challengeMenu).then(answer => {
                switch (answer.option) {
                  case 'alp':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < challCol.getLength(); i++) {                           
                            console.log(challCol.alphabeticNameSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < challCol.getLength(); i++) {
                            console.log(challCol.alphabeticNameSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                  break;
                  case 'kms':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < challCol.getLength(); i++) {
                            console.log(challCol.kmsSortAscend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                        case 'desc':
                          for (let i = 0; i < challCol.getLength(); i++) {
                            console.log(challCol.kmsSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                  case 'user':
                    break;           
                    
                }
              });
              break;
            
          }
        });
        break;
      case 'add':
        inquirer.prompt(optionsMenu).then(answer => {
          switch (answer.option) {
            case 'route':
              inquirer.prompt(addRouteMenu).then(answer);
              break;
          }
        });
        break;

      case 'modify':
        break;

      case 'delete':
        break;
    }
  });

  //}
//}

//main();
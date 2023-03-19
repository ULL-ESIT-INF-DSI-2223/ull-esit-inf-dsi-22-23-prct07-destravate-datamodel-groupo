import { route1, route2, route3, route4, route5, route6, route7, route8, route9, route10} from "./database"
import { user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20} from "./database"
import { group1, group2, group3, group4, group5 } from "./database";
import { chall1, chall2, chall3 } from "./database";
import { ChallengeCollection } from "./challengecollection";



import { UserCollection } from "./usersollection";




import { inquirer } from "inquirer"
import { lowdb } from "lowdb"

import { RouteCollection } from "./routescollection";
import { GroupCollection } from "./groupcollection";


const challCol = new ChallengeCollection([chall1, chall2, chall3]);
const routeCol = new RouteCollection([route1, route2, route3, route4, route5, route6, route7, route8, route9, route10]);
const userCol = new UserCollection([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]);
const groupCol = new GroupCollection([group1, group2, group3, group4, group5]);

const inquirer = require('inquirer');
const low = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({challCol}).write();

// const p = db.get('challCol').value()

// console.log(p);

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

const groupMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿De qué forma desea mostrar los grupos?',
    choices: [
      {name:'Alfabéticamente por nombre del grupo', value: 'alp'},
      {name:'Por cantidad de Kms realizados', value: 'kms'},
      {name:'Por la cantidad de miembros que lo componen', value: 'members'}
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

const addChallMenu = [
  {
    type: 'input',
    name: 'id',    
  },
  {
    type: 'input',
    name: 'name',    
  },
  {
    type: 'input',
    name: 'routes',    
  },
  {
    type: 'input',
    name: 'activity',    
  },
  {
    type: 'input',
    name: 'kms',    
  },
  {
    type: 'users',
    name: 'kms',    
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
              inquirer.prompt(groupMenu).then(answer => {
                switch (answer.option) {
                  case 'alp':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < groupCol.getLength(); i++) {                           
                            console.log(groupCol.alphabeticNameSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < groupCol.getLength(); i++) {
                            console.log(groupCol.alphabeticNameSortDescend()[i].print());
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
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortAscendWeek()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'month':
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortAscendMonth()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'year':
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortAscendYear()[i].print());
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
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortDescendWeek()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'month':
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortDescendMonth()[i].print());
                                  console.log('-------');
                                } 
                                break;
                              case 'year':
                                for (let i = 0; i < groupCol.getLength(); i++) {
                                  console.log(groupCol.kmsSortDescendYear()[i].print());
                                  console.log('-------');
                                } 
                                break;
                            }     
                          });
                          break;
                      }
                    });
                    break;
                  case 'members':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < groupCol.getLength(); i++) {                           
                            console.log(groupCol.membersSortAscend()[i].print());
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          for (let i = 0; i < groupCol.getLength(); i++) {
                            console.log(groupCol.membersSortDescend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                      }
                    });
                    break;
                }
              });
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
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          for (let i = 0; i < challCol.getLength(); i++) {
                            console.log(challCol.userSortAscend()[i].print());
                            console.log('-------');
                          }                          
                          break;
                        case 'desc':
                          for (let i = 0; i < challCol.getLength(); i++) {
                            console.log(challCol.userSortDescend()[i].print());
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
      case 'add':
        inquirer.prompt(optionsMenu).then(answer => {
          switch (answer.option) {
            case 'route':
              inquirer.prompt(addRouteMenu).then(answer => {
                console.log(answer);
                routeCol.addItem(answer);
                console.log(routeCol);
              });
              break;
            case 'user':

              break;

            case 'group':
              break;

            case 'challenge':
              inquirer.prompt(addChallMenu).then(answer => {
                console.log(answer);
                challCol.addItem(answer);
                console.log(challCol);
                db.defaults({challCol}).write();
                const p = db.get('challCol').value()
                console.log(p);
              });
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
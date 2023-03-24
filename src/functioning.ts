import { route1, route2, route3, route4, route5, route6, route7, route8, route9, route10} from "./database"
import { user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20} from "./database"
import { group1, group2, group3, group4, group5 } from "./database";
import { chall1, chall2, chall3} from "./database";
import { ChallengeCollection } from "./challengecollection";
import { coords } from "./route";

import { UserCollection } from "./usersollection";

import { inquirer } from "inquirer"
import { lowdb } from "lowdb"
import { Group } from "./group"

import { routeHistory } from "./users";

import { RouteCollection } from "./routescollection";
import { GroupCollection } from "./groupcollection";
import { Route } from "./route";
import { Challenge } from "./challenge";
import { stats, User } from "./users";


const challCol = new ChallengeCollection([chall1, chall2, chall3]);
const routeCol = new RouteCollection([route1, route2, route3, route4, route5, route6, route7, route8, route9, route10]);
const userCol = new UserCollection([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]);
const groupCol = new GroupCollection([group1, group2, group3, group4, group5]);

const inquirer = require('inquirer');
const low = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const questionsMenu = [
  {
    type: 'list', 
    name: 'option',
    message: '¿Qué quiere hacer?',
    choices: [
      {name: 'Mostrar elemento', value: 'navegation'},
      {name: 'Añadir elemento', value: 'add'},
      {name: 'Modificar elemento', value: 'modify'},
      {name: 'Borrar elemento', value: 'delete'}
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
    message: '¿En base a qué fecha?',
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
    message: 'Introduzca el id de la ruta: ',
  },
  {
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre de la ruta: ',
  },
  {
    type: 'input',
    name: 'scoordsx',
    message: 'Introduzca las coordenadas x de inicio de la ruta: ',
  },
  {
    type: 'input',
    name: 'scoordsy',
    message: 'Introduzca las coordenadas y de inicio de la ruta: ',
  },
  {
    type: 'input',
    name: 'ecoordsx',
    message: 'Introduzca las coordenadas x finales de la ruta: ',
  },
  {
    type: 'input',
    name: 'ecoordsy',
    message: 'Introduzca las coordenadas y finales de la ruta: ',
  },
  {
    type: 'input',
    name: 'length',
    message: 'Introduzca la longitud de la ruta en kilómetros: ',
  },
  {
    type: 'input',
    name: 'slope',
    message: 'Introduzca el desnivel medio de la ruta: ',
  },
  {
    type: 'input',
    name: 'uids',
    message: 'Introduzca el id de los usuario que han realizado la ruta separados por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'activity',
    message: 'Introduzca el tipo de actividad de la ruta (bicicleta o corriendo): '
  },
  {
    type: 'input',
    name: 'rating',
    message: 'Introduzca la calificación media de la ruta: '
  }
]

const addUserMenu = [
  {
    type: 'input',
    name: 'id',
    message: 'Introduzca el id del usuario: '
  },
  {
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre del usuario: '
  },
  {
    type: 'input',
    name: 'activity',
    message: 'Introduzca la actividad que realiza el usuario (correr o bicicleta): '
  },
  {
    type: 'input',
    name: 'friends',
    message: 'Introduzca el id de los amigos del usuario separado por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'kmweek',
    message: 'Introduzca los km que realiza el usuario en la semana: '
  },
  {
    type: 'input',
    name: 'slopeweek',
    message: 'Introduzca el desnivel que realiza el usuario en la semana: '
  },
  {
    type: 'input',
    name: 'kmmonth',
    message: 'Introduzca los km que realiza el usuario en el mes: '
  },
  {
    type: 'input',
    name: 'slopemonth',
    message: 'Introduzca el desnivel que realiza el usuario en el mes: '
  },
  {
    type: 'input',
    name: 'kmyear',
    message: 'Introduzca los km que realiza el usuario en el año: '
  },
  {
    type: 'input',
    name: 'slopeyear',
    message: 'Introduzca el desnivel que realiza el usuario en el año: '
  },
  {
    type: 'input',
    name: 'favoriteroutes',
    message: 'Introduzca el id de las rutas favoritas separados por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'activechall',
    message: 'Introduzca el id de los retos activos separados por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
]

const addGroupMenu = [
  {
    type: 'input',
    name: 'id',
    message: 'Introduzca el id del grupo: '
  },
  {
    type: 'input',
    name: 'name',
    message: 'Introduzca el name del grupo: '
  },
  {
    type: 'input',
    name: 'members',
    message: 'Introduzca el id de los miembros del grupo separados por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'kmweek',
    message: 'Introduzca los km que realiza el grupo en la semana: '
  },
  {
    type: 'input',
    name: 'slopeweek',
    message: 'Introduzca el desnivel que realiza el grupo en la semana: '
  },
  {
    type: 'input',
    name: 'kmmonth',
    message: 'Introduzca los km que realiza el grupo en el mes: '
  },
  {
    type: 'input',
    name: 'slopemonth',
    message: 'Introduzca el desnivel que realiza el grupo en el mes: '
  },
  {
    type: 'input',
    name: 'kmyear',
    message: 'Introduzca los km que realiza el grupo en el año: '
  },
  {
    type: 'input',
    name: 'slopeyear',
    message: 'Introduzca el desnivel que realiza el grupo en el año: '
  },
  {
    type: 'input',
    name: 'favroutes',
    message: 'Introduzca el id de las rutas favoritas del grupo separados por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  }
]

const addChallMenu = [
  {
    type: 'input',
    name: 'id',    
    message: 'Introduzca el id del reto: '
  },
  {
    type: 'input',
    name: 'name',  
    message: 'Introduzca el nombre del reto: '  
  },
  {
    type: 'input',
    name: 'routes',
    message: 'Introduzca el id de las rutas que desea añadir separado por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'activity',    
    message: 'Introduzca el tipo de actividad de la ruta (bicicleta o corriendo): '
  },
  {
    type: 'input',
    name: 'users',   
    message: 'Introduzca el id de los usuarios que desea añadir separado por comas: ',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Introduzca al menos un valor separado por comas';
      }
      return true;
    }
  },
]

const remove = [
  {
    type: 'input',
    name: 'id',
    message: 'Id del elemento que desea borrar: '
  }
]

const modify = [
  {
    type: 'input',
    name: 'id',
    message: 'Id del elemento que desea modificar: '
  }
]

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
                const vector = answer.uids.split(',').map((v) => Number(v.trim()));
                const sCoords: coords = {x: Number(answer.scoordsx), y: Number(answer.scoordsy)};
                const eCoords: coords = {x: Number(answer.ecoordsx), y: Number(answer.ecoordsy)};
                const newRoute = new Route(Number(answer.id), answer.name, sCoords, eCoords, Number(answer.length), Number(answer.slope), vector, answer.activity, Number(answer.rating));
                
                routeCol.addItem(newRoute);
                db.get('routeCol.items').push(newRoute).write();
              });
              break;
            case 'user':
              inquirer.prompt(addUserMenu).then(answer => {
                const friends = answer.friends.split(',').map((v) => Number(v.trim()));
                const stats: stats = {kmWeek: Number(answer.kmweek), slopeWeek: Number(answer.slopeweek), kmMonth: Number(answer.kmmonth), slopeMonth: Number(answer.slopemonth), kmYear: Number(answer.kmyear), slopeYear: Number(answer.slopeyear)}
                const froute = answer.favoriteroutes.split(',').map((v) => Number(v.trim()));
                const actchall = answer.activechall.split(',').map((v) => Number(v.trim()));

                const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}                

                const newUser = new User(Number(answer.id), answer.name, answer.activity, friends, friends, stats, froute, actchall, [routeHistory1]);
                userCol.addItem(newUser);
                db.get('userCol.items').push(newUser).write();
              });
              break;

            case 'group':
              inquirer.prompt(addGroupMenu).then(answer => {
                const members = answer.members.split(',').map((v) => Number(v.trim()));
                const stats: stats = {kmWeek: Number(answer.kmweek), slopeWeek: Number(answer.slopeweek), kmMonth: Number(answer.kmmonth), slopeMonth: Number(answer.slopemonth), kmYear: Number(answer.kmyear), slopeYear: Number(answer.slopeyear)}
                const froute = answer.favroutes.split(',').map((v) => Number(v.trim()));                

                const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}                

                const newGroup = new Group(Number(answer.id), answer.name, members, stats, froute, routeHistory1);
                groupCol.addItem(newGroup);
                db.get('groupCol.items').push(newGroup).write();
              });
              break;

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
          }
        });
        break;

      case 'modify':
        inquirer.prompt(optionsMenu).then(answer => {
          switch (answer.option) {
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
            case 'user':
              inquirer.prompt(modify).then(answer => {  
                if (db.get('userCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('userCol.items').remove({ id: Number(answer.id) }).write();
                  inquirer.prompt(addUserMenu).then(answer => {
                    const friends = answer.friends.split(',').map((v) => Number(v.trim()));
                    const stats: stats = {kmWeek: Number(answer.kmweek), slopeWeek: Number(answer.slopeweek), kmMonth: Number(answer.kmmonth), slopeMonth: Number(answer.slopemonth), kmYear: Number(answer.kmyear), slopeYear: Number(answer.slopeyear)}
                    const froute = answer.favoriteroutes.split(',').map((v) => Number(v.trim()));
                    const actchall = answer.activechall.split(',').map((v) => Number(v.trim()));

                    const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}                

                    const newUser = new User(Number(answer.id), answer.name, answer.activity, friends, friends, stats, froute, actchall, [routeHistory1]);
                    userCol.addItem(newUser);
                    db.get('userCol.items').push(newUser).write();
                  });
                }
              });
              break;

            case 'group':
              inquirer.prompt(modify).then(answer => {  
                if (db.get('groupCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('groupCol.items').remove({ id: Number(answer.id) }).write();
                  inquirer.prompt(addGroupMenu).then(answer => {
                    const members = answer.members.split(',').map((v) => Number(v.trim()));
                    const stats: stats = {kmWeek: Number(answer.kmweek), slopeWeek: Number(answer.slopeweek), kmMonth: Number(answer.kmmonth), slopeMonth: Number(answer.slopemonth), kmYear: Number(answer.kmyear), slopeYear: Number(answer.slopeyear)}
                    const froute = answer.favroutes.split(',').map((v) => Number(v.trim()));                

                    const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}                

                    const newGroup = new Group(Number(answer.id), answer.name, members, stats, froute, routeHistory1);
                    groupCol.addItem(newGroup);
                    db.get('groupCol.items').push(newGroup).write();
                  });
                }
              });
              break;
            case 'challenge':
              inquirer.prompt(modify).then(answer => {  
                if (db.get('challCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('challCol.items').remove({ id: Number(answer.id) }).write();
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
                }
              });
              break;
          }
        });
        break;

      case 'delete':
        inquirer.prompt(optionsMenu).then(answer => {
          switch (answer.option) {
            case 'route':            
              inquirer.prompt(remove).then(answer => {                  
                if (db.get('routeCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('routeCol.items').remove({ id: Number(answer.id) }).write();
                } else {
                  console.log("El elemento no está en la base de datos.")
                }                
              });
              break;
            case 'user':
              inquirer.prompt(remove).then(answer => {                  
                if (db.get('userCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('userCol.items').remove({ id: Number(answer.id) }).write();
                } else {
                  console.log("El elemento no está en la base de datos.")
                }                
              });
              break;
            case 'group':
              inquirer.prompt(remove).then(answer => {                  
                if (db.get('groupCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('groupCol.items').remove({ id: Number(answer.id) }).write();
                } else {
                  console.log("El elemento no está en la base de datos.")
                }                
              });
              break;
            case 'challenge':
              inquirer.prompt(remove).then(answer => {                   
                if (db.get('challCol.items').find({ id: Number(answer.id) }).value() !== undefined) {
                  db.get('challCol.items').remove({ id: Number(answer.id) }).write();
                } else {
                  console.log("El elemento no está en la base de datos.")
                }                
              });
              break;
          }
        });
        break;
    }
  });
import { Challenge } from "./challenge";
import { ChallengeCollection } from "./challengecollection";


import { Route } from "./route";
import { coords } from "./route";

import { inquirer } from "inquirer"


const sCoords: coords = {x: 28.4894, y: 16.3168};
const eCoords: coords = {x: 28.4841, y: 16.2337};


const route1 = new Route(101, "Teide", sCoords, eCoords, 18, 13, [123, 345, 765], "bicicleta", 9);
const route2 = new Route(102, "Sentidos", sCoords, eCoords, 7, 10, [43, 1], "bicicleta", 9);
const route3 = new Route(103, "Lavas", sCoords, eCoords, 8, 10, [9, 653, 32, 12], "corriendo", 9);
const route4 = new Route(104, "Acantilados", sCoords, eCoords, 9, 10, [51] ,"corriendo", 9);
const route5 = new Route(105, "Caldera", sCoords, eCoords, 8, 10, [51] ,"bicicleta", 9);
const route6 = new Route(106, "Guanches", sCoords, eCoords, 9, 10, [51] ,"corriendo", 9);
const route7 = new Route(107, "Bosques", sCoords, eCoords, 12, 10, [51] ,"corriendo", 9);
const route8 = new Route(108, "Bodegas", sCoords, eCoords, 17, 10, [51] ,"bicicleta", 9);
const route9 = new Route(109, "Molinos", sCoords, eCoords, 14, 10, [51] ,"bicicleta", 9);
const route10 = new Route(110, "Pueblos", sCoords, eCoords, 2, 10, [51] ,"corriendo", 9);

const chall1 = new Challenge(1, "Tres Cumbres", [route1, route2, route5], "bicicleta");
const chall2 = new Challenge(2, "Vuelta Tenerife", [route6, route4, route3, route7, route10], "corriendo");
const chall3 = new Challenge(3, "Estrellas", [route8, route9], "bicicleta");

const challCol = new ChallengeCollection([chall1, chall2, chall3])

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

const challengeMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿De qué forma desea mostrar los retos?',
    choices: [
      {name: 'Alfabéticamente por nombre del reto.', value: 'alp'},
      {name: 'Por cantidad de Kms que se deben realizar.', value: 'kms'},
      {name: 'Por la cantidad de usuarios que lo están realizando.', value: 'user'}
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
              //console.log(answer.option);
            break;
            case 'user':
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
                            challCol.alphabeticNameSortAscend()[i].print();
                            console.log('-------');
                          }
                          break;
                        case 'desc':
                          console.log(challCol.alphabeticNameSortDescend())
                          break;
                      }
                    });
                  break;
                  case 'kms':
                    inquirer.prompt(sortMenu).then(answer => {
                      switch (answer.option) {
                        case 'asc':
                          console.log(challCol.kmsSortAscend());
                          break;
                        case 'desc':
                          console.log(challCol.kmsSortDescend());
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
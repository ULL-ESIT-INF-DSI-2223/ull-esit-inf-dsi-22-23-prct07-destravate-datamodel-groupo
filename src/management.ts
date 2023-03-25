import { route1, route2, route3, route4, route5, route6, route7, route8, route9, route10} from "./database"
import { user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20} from "./database"
import { group1, group2, group3, group4, group5 } from "./database";
import { User } from "./users";
import { Group } from "./group";


import { UserCollection } from "./usersollection";
import { RouteCollection } from "./routescollection";
import { GroupCollection } from "./groupcollection";

import { inquirer } from "inquirer";

const routeCol = new RouteCollection([route1, route2, route3, route4, route5, route6, route7, route8, route9, route10]);
const userCol = new UserCollection([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]);
const groupCol = new GroupCollection([group1, group2, group3, group4, group5]);

const inquirer = require('inquirer');


export class Management {
  private user: User;
  private users: UserCollection;
  private routes: RouteCollection;
  private groups: GroupCollection;

  /**
   * Management's class constructor
   */
  constructor() {
    this.users = userCol;
    this.routes = routeCol;
    this.groups = groupCol;
  }

  /**
   * start function of the management class
   */
  async start() {
    const answer = await inquirer.prompt({
      name: "option",
      type: "list",
      message: "¿Qué desea hacer?",
      choices: [
        "Registrarse en el sistema",
        "Iniciar sesión en el sistema",
        "Salir",
      ],
    });

    switch (answer.option) {
      case "Registrarse en el sistema":
        await this.signIn();
        break;
      case "Iniciar sesión en el sistema":
        await this.logIn();
        break;
      case "Salir":
        console.log("Hasta pronto");
        return;
      default:
        console.log("Opción no válida");
    }
    await this.options();
  }

  /**
   * Function to select a management function
   */
  async options() {
    const answer = await inquirer.prompt({
      name: "option",
      type: "list",
      message: "¿Qué desea hacer?",
      choices: [
        "Ver usuarios",
        "Añadir amigo",
        "Borrar amigo",
        "Ver rutas",
        "Unirse a grupo",
        "Ver grupos",
        "Crear grupo",
        "Borrar grupo",
        "Salir",
      ],
    });

    switch (answer.option) {
      case "Ver usuarios": //OK
        await this.showUsers();
        break;
      case "Añadir amigo": //ver mas opciones
        await this.addFriend();
        break;
      case "Borrar amigo": //ver mas opciones
        await this.deleteFriend();
        break;
      case "Ver rutas": //OK
        await this.showRoutes();
        break;
      case "Unirse a grupo":
        await this.joinGroup();
        break;
      case "Ver grupos": //OK
        await this.showGroups();
        break;
      case "Crear grupo": //OK
        await this.createGroup();
        break;
      case "Borrar grupo": //OK
        await this.deleteGroup();
        break;
      case "Salir":
        console.log("Hasta pronto");
        break;

      default:
        console.log("Opción no válida");
    }
    await this.options();
  }

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
      await this.logIn();
    }
  }

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
      this.routes.getRouteById(answer.id).print();
    } else {
      console.log("la ruta no existe. Vuelve a intentarlo");
      await this.showRoutes();
    }
  }
  /**
   * Function to show the database's users 
   */
  async showUsers() {
    this.users.showUsers();
  }

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

  /**
   * Function that shows groups of the database
   */
  async showGroups() {
    this.groups.showGroups();
  }

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
}

const management = new Management();
management.start();

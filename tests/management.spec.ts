import "mocha";
import { expect } from "chai";

const inquirer = require("inquirer");
const sinon = require("sinon");

import { user1 } from "../src/database";
import { Management } from "./../src/management";

describe("Management Test", () => {
  it("log in", async () => {
    const management = new Management();
    inquirer.prompt = () => Promise.resolve({ id: 201 });
    await management.logIn();
    expect(management.getUser().id).to.deep.equal(201);
  });
  
  it("log in error", async () => {
    const management = new Management();
    inquirer.prompt = () => Promise.resolve({ id: 300 });
    await management.logIn();
    expect(management.getUser()).to.be.undefined;
  });
  it("sign in", async () => {
    const management = new Management();
    inquirer.prompt = () =>
      Promise.resolve({ id: 200, name: "David", activity: "bici" });
    await management.signIn();
    expect(management.getUser().id).to.be.equal(200);
  });
  it("sign in error", async () => {
    const management = new Management();
    inquirer.prompt = () =>
      Promise.resolve({id: 201, name: "Nacho", activity: "bici"});
    await management.signIn();
    expect(management.getUser()).to.be.undefined;
  });

  it("should show all users", async () => {
    const management = new Management();
    // Capturamos la salida de consola utilizando el paquete 'stdio-stderr'
    const logs: any = [];
    const log: any = console.log;
    console.log = (message) => logs.push(message);
    await management.showUsers();
    // Comparamos la salida capturada con la salida esperada
    expect(logs).to.be.eql([
      201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
      216, 217, 218, 219, 220, 200,
    ]);
  });

  it("should print a route", async () => {
    const management = new Management();
    const answer = { id: 101 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.showRoutes();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message:
          "Introduce el numero de la ruta de la que quieres obtener informacion:",
      },
    ]);
    sinon.assert.calledWith(
      consoleStub,
      "Id: 101\n    Nombre: Teide\n    Geolocalización de inicio: 28.4894, 16.3168\n    Geolocalización del final: 28.4841, 16.2337\n    Longitud de la ruta: 18 kilómetros\n    Desnivel medio de la ruta: 1000 metros\n    Ids de los usuarios que han realizado la ruta: 201, 203, 207, 209\n    Actividad: bicicleta\n    Calificación media: 9.8"
    );
    promptStub.restore();
    consoleStub.restore();
  });
  

  it("should print a route error", async () => {
    const management = new Management();
    const answer = { id: 300 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.showRoutes();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message:
          "Introduce el numero de la ruta de la que quieres obtener informacion:",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "La ruta no existe.");
    promptStub.restore();
    consoleStub.restore();
  });


  it("should show all groups", async () => {
    const management = new Management();
    const logs: any = [];
    const log: any = console.log;
    console.log = (message) => logs.push(message);
    await management.showGroups();
    expect(logs).to.be.eql([301, 302, 303, 304, 305]);
  });

  it("addFriend", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 209 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.addFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres añadir como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Amigo añadido correctamente");
    promptStub.restore();
    consoleStub.restore();
  });

  it("addFriend error", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 202 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.addFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres añadir como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Ya eres amigo de este usuario");
    promptStub.restore();
    consoleStub.restore();
  });

  it("addFriend user not exist", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 300 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.addFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres añadir como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "El usuario no existe");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteFriend", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 202 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres eliminar como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Amigo eliminado correctamente");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteFriend error", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 215 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres eliminar como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "No eres amigo de este usuario");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteFriend user not exist", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 300 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteFriend();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del usuario que quieres eliminar como amigo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "El usuario no existe");
    promptStub.restore();
    consoleStub.restore();
  });

  it("joinGroup", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 301 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.joinGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo al que quieres unirte",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Te has unido al grupo correctamente");
    promptStub.restore();
    consoleStub.restore();
  });

  it("joinGroup error", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 500 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.joinGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo al que quieres unirte",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "El grupo no existe");
    promptStub.restore();
    consoleStub.restore();
  });

  it("CreateGroup", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 900 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.createGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Grupo creado correctamente");
    promptStub.restore();
    consoleStub.restore();
  });

  it("CreateGroup error", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 301 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.createGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "El grupo ya existe");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteGroup", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 900 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "Grupo eliminado correctamente");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteGroup error", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 500 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "El grupo no existe");
    promptStub.restore();
    consoleStub.restore();
  });

  it("deleteGroup not owner", async () => {
    const management = new Management();
    management.setUser(user1);
    const answer = { id: 301 };
    const promptStub = sinon.stub(inquirer, "prompt").resolves(answer);
    const consoleStub = sinon.stub(console, "log");

    await management.deleteGroup();

    sinon.assert.calledWith(promptStub, [
      {
        name: "id",
        type: "input",
        message: "Introduce el id del grupo",
      },
    ]);
    sinon.assert.calledWith(consoleStub, "No eres el propietario del grupo");
    promptStub.restore();
    consoleStub.restore();
  });

  it("start method exit", async () => {
    const management = new Management();
    const consoleStub = sinon.stub(console, "log");
    const promptStub = sinon
      .stub(inquirer, "prompt")
      .resolves({ option: "Salir" });

    await management.start();

    sinon.assert.calledWith(promptStub, {
      name: "option",
      type: "list",
      message: "¿Qué desea hacer?",
      choices: [
        "Registrarse en el sistema",
        "Iniciar sesión en el sistema",
        "Salir",
      ],
    });
    sinon.assert.calledWith(consoleStub, "Hasta pronto");
    promptStub.restore();
    consoleStub.restore();
  });

  it("options method exit", async () => {
    const management = new Management();
    const consoleStub = sinon.stub(console, "log");
    const promptStub = sinon
      .stub(inquirer, "prompt")
      .resolves({ option: "Salir" });

    await management.options();

    sinon.assert.calledWith(promptStub, {
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
    sinon.assert.calledWith(consoleStub, "Hasta pronto");
    promptStub.restore();
    consoleStub.restore();
  });
});
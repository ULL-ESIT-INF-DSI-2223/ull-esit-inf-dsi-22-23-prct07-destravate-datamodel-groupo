import "mocha";
import { expect } from "chai";
import { user1 } from "../src/database";

const print1 = "Id: 201\nNombre: Ana\nActividad: correr\nAmigos: 203, 209\nGrupos de amigos: 1, 3\nEstadísticas:\n  Kms en la semana: 76\n  Desnivel en la semana: 3200 metros\n  Kms en el mes: 354\n  Desnivel en el mes: 12800 metros\n  Kms en el año: 3248\n  Desnivel en el año: 153600 metros\nRutas favoritas: 101, 102\nRetos activos: 1, 3"

const routeHistory= user1.routeHistoryPrint();

describe("print() function test", () => {
  it("user1.print() returns 'print1'", () => {
    expect(user1.print()).to.be.eql(print1);
  });   
});

describe("routeHistoryPrint() function test", () => {
  it("user1.routeHistoryPrint() returns 'routeHistory'", () => {
    expect(user1.routeHistoryPrint()).to.be.eql(routeHistory);
  });   
});
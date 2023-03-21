import "mocha";
import { expect } from "chai";
import { group1, group2, group3, group4, group5 } from "../src/database";
import { groupStats4, groupStats5 } from "../src/database";

const statsPrint3 = ("  Kms en la semana: 232\n  Desnivel en la semana: 10400 metros\n  Kms en el mes: 544\n  Desnivel en el mes: 52000 metros\n  Kms en el año: 15600\n  Desnivel en el año: 499200 metros")
const print3 = ("Id: 303\nNombre: Exploradores de la Naturaleza\nParticipantes: 201, 202, 204, 217\nEstadísticas:\n  Kms en la semana: 232\n  Desnivel en la semana: 10400 metros\n  Kms en el mes: 544\n  Desnivel en el mes: 52000 metros\n  Kms en el año: 15600\n  Desnivel en el año: 499200 metros\nClasificación:\nRutas favoritas: Caldera, Bosques")

describe("getName() function test", () => {
  it("group1.getName() returns 'Los Caminantes'", () => {
    expect(group1.getName()).to.be.eql('Los Caminantes');
  });  
  it("group2.getName() returns 'Senderistas en Acción'", () => {
    expect(group2.getName()).to.be.eql('Senderistas en Acción');
  });  
});

describe("getStats() function test", () => {
  it("group4.getStats() returns 'Los Caminantes'", () => {
    expect(group4.getStats()).to.be.eql(groupStats4);
  });  
  it("group5.getStats() returns 'Senderistas en Acción'", () => {
    expect(group5.getStats()).to.be.eql(groupStats5);
  });  
});

describe("getNumberOfMembers() function test", () => {
  it("group4.getNumberOfMembers() returns 'Los Caminantes'", () => {
    expect(group4.getNumberOfMembers()).to.be.eql(4);
  });  
  it("group5.getNumberOfMembers() returns 'Senderistas en Acción'", () => {
    expect(group5.getNumberOfMembers()).to.be.eql(3);
  });  
});

describe("statsPrint() function test", () => {
  it("group3.statsPrint() returns print3", () => {
    expect(group3.statsPrint()).to.be.eql(statsPrint3);
  });  
});

describe("print() function test", () => {
  it("group3.print() returns print3", () => {
    expect(group3.print()).to.be.eql(print3);
  });  
});
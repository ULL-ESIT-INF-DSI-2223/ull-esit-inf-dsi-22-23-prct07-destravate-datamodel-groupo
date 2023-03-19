import "mocha";
import { expect } from "chai";
import { chall1, chall2, chall3 } from "../src/database";

const print1 = ("Id: 1\nNombre: Tres Cumbres\nRutas: Teide, Sentidos, Caldera\nActividad: bicicleta\nKms: 33\nUsuarios: Ana, María, Laura");
const print2 = ("Id: 2\nNombre: Vuelta Tenerife\nRutas: Guanches, Acantilados, Lavas, Bosques, Pueblos\nActividad: corriendo\nKms: 41\nUsuarios: Juan, Luis");

describe("getName() function test", () => {
  it("chall1.getName() returns 'Tres Cumbres'", () => {
    expect(chall1.getName()).to.be.eql('Tres Cumbres');
  });  
  it("chall2.getName() returns 'Vuelta Tenerife'", () => {
    expect(chall2.getName()).to.be.eql('Vuelta Tenerife');
  });  
});

describe("getTotalKms() function test", () => {
  it("chall1.getTotalKms() returns 33", () => {
    expect(chall1.getTotalKms()).to.be.eql(33);
  });  
  it("chall3.getTotalKms() returns 31", () => {
    expect(chall3.getTotalKms()).to.be.eql(31);
  });  
});

describe("getNumberOfUser() function test", () => {
  it("chall1.getNumberOfUser() returns 3", () => {
    expect(chall1.getNumberofUser()).to.be.eql(3);
  });  
  it("chall2.getNumberOfUser() returns 2", () => {
    expect(chall2.getNumberofUser()).to.be.eql(2);
  });  
});

describe("print() function test", () => {
  it("chall1.print() returns print1", () => {
    expect(chall1.print()).to.be.eql(print1);
  });  
  it("chall2.print() returns print2", () => {
    expect(chall2.print()).to.be.eql(print2);
  });  
});
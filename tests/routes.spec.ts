import "mocha";
import { expect } from "chai";
import { route1, route2, route3, route4, route5, route6, route7, route8, route9, route10 } from "../src/database";

const print8 = ("Id: 108\n    Nombre: Bodegas\n    Geolocalización de inicio: 28.4894, 16.3168\n    Geolocalización del final: 28.4841, 16.2337\n    Longitud de la ruta: 17 kilómetros\n    Desnivel medio de la ruta: 500 metros\n    Ids de los usuarios que han realizado la ruta: 201, 217, 220\n    Actividad: bicicleta\n    Calificación media: 6.2")
const print5 = ("Id: 105\n    Nombre: Caldera\n    Geolocalización de inicio: 28.4894, 16.3168\n    Geolocalización del final: 28.4841, 16.2337\n    Longitud de la ruta: 8 kilómetros\n    Desnivel medio de la ruta: 400 metros\n    Ids de los usuarios que han realizado la ruta: 202, 213, 214, 216\n    Actividad: bicicleta\n    Calificación media: 9.2")

describe("getName() function test", () => {
  it("route1.getname() returns 'Teide'", () => {
    expect(route1.getName()).to.be.eql('Teide');
  });  
  it("route8.getname() returns 'Bodegas'", () => {
    expect(route8.getName()).to.be.eql('Bodegas');
  });  
});

describe("getUsersQuantity() function test", () => {
  it("route2.getUsersQuantity() returns 2", () => {
    expect(route2.getUsersQuantity()).to.be.eql(2);
  });  
  it("route5.getUsersQuantity() returns 4", () => {
    expect(route5.getUsersQuantity()).to.be.eql(4);
  });  
});

describe("getLength() function test", () => {
  it("route3.getLength() returns 8", () => {
    expect(route3.getLength()).to.be.eql(8);
  });  
  it("route10.getLength() returns 2", () => {
    expect(route10.getLength()).to.be.eql(2);
  });  
});

describe("getActivityType() function test", () => {
  it("route3.getActivityType() returns 'corriendo'", () => {
    expect(route7.getActivityType()).to.be.eql("corriendo");
  });  
  it("route10.getActivityType() returns 'bicicleta'", () => {
    expect(route9.getActivityType()).to.be.eql("bicicleta");
  });  
});

describe("getRating() function test", () => {
  it("route7.getRating() returns 8.7", () => {
    expect(route4.getRating()).to.be.eql(8.7);
  });  
  it("route9.getRating() returns 9.7", () => {
    expect(route6.getRating()).to.be.eql(9.7);
  });  
});

describe("print() function test", () => {
  it("route8.print() returns print8", () => {
    expect(route8.print()).to.be.eql(print8);
  });  
  it("route5.print() returns print5", () => {
    expect(route5.print()).to.be.eql(print5);
  });    
});

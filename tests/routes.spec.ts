import "mocha";
import { expect } from "chai";
import { Route } from "../src/route"
import { coords } from "../src/route";

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

const print8 = ("Id: 108\nNombre: Bodegas\nGeolocalización de inicio: 28.4894, 16.3168\nGeolocalización del final: 28.4841, 16.2337\nLongitud de la ruta: 17 kilómetros\nDesnivel medio de la ruta: 500 metros\nIds de los usuarios que han realizado la ruta: 201, 217, 220\nActividad: bicicleta\nCalificación media: 6.2")
const print5 = ("Id: 105\nNombre: Caldera\nGeolocalización de inicio: 28.4894, 16.3168\nGeolocalización del final: 28.4841, 16.2337\nLongitud de la ruta: 8 kilómetros\nDesnivel medio de la ruta: 400 metros\nIds de los usuarios que han realizado la ruta: 202, 213, 214, 216\nActividad: bicicleta\nCalificación media: 9.2")

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

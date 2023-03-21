import { Route } from "./route";
import { coords } from "./route";
import { routeHistory } from "./users";

import { User } from "./users"
import { stats } from "./users";
import { Challenge } from "./challenge";
import { Group } from "./group";


const sCoords: coords = {x: 28.4894, y: 16.3168};
const eCoords: coords = {x: 28.4841, y: 16.2337};

export const route1 = new Route(101, "Teide", sCoords, eCoords, 18, 1000, [201, 203, 207, 209], "bicicleta", 9.8);
export const route2 = new Route(102, "Sentidos", sCoords, eCoords, 7, 250, [201, 202], "bicicleta", 7.2);
export const route3 = new Route(103, "Lavas", sCoords, eCoords, 8, 600, [204, 206, 207, 208], "corriendo",6.8);
export const route4 = new Route(104, "Acantilados", sCoords, eCoords, 10, 500, [205, 210, 211, 212, 215] ,"corriendo", 8.7);
export const route5 = new Route(105, "Caldera", sCoords, eCoords, 8, 400, [202, 213, 214, 216] ,"bicicleta", 9.2);
export const route6 = new Route(106, "Guanches", sCoords, eCoords, 9, 300, [205, 208, 215] ,"corriendo", 9.7);
export const route7 = new Route(107, "Bosques", sCoords, eCoords, 12, 400, [217] ,"corriendo", 8.8);
export const route8 = new Route(108, "Bodegas", sCoords, eCoords, 17, 500, [201, 217, 220] ,"bicicleta", 6.2);
export const route9 = new Route(109, "Molinos", sCoords, eCoords, 14, 400, [218, 219] ,"bicicleta", 7.7);
export const route10 = new Route(110, "Pueblos", sCoords, eCoords, 2, 200, [213, 220] ,"corriendo", 5.4);

export const stats1: stats = {kmWeek: 76, slopeWeek: 3200, kmMonth: 354, slopeMonth: 12800, kmYear: 3248, slopeYear: 153600};
export const stats2: stats = {kmWeek: 87, slopeWeek: 4900, kmMonth: 248, slopeMonth: 19600, kmYear: 4676, slopeYear: 235200};
export const stats3: stats = {kmWeek: 92, slopeWeek: 5100, kmMonth: 378, slopeMonth: 24000, kmYear: 4016, slopeYear: 288000};
export const stats4: stats = {kmWeek: 63, slopeWeek: 2700, kmMonth: 292, slopeMonth: 10800, kmYear: 4524, slopeYear: 129600};
export const stats5: stats = {kmWeek: 91, slopeWeek: 5000, kmMonth: 324, slopeMonth: 20000, kmYear: 4068, slopeYear: 240000};
export const stats6: stats = {kmWeek: 86, slopeWeek: 4700, kmMonth: 384, slopeMonth: 18800, kmYear: 4128, slopeYear: 225600};
export const stats7: stats = {kmWeek: 69, slopeWeek: 3000, kmMonth: 226, slopeMonth: 12000, kmYear: 3136, slopeYear: 144000};
export const stats8: stats = {kmWeek: 73, slopeWeek: 3200, kmMonth: 252, slopeMonth: 12800, kmYear: 3004, slopeYear: 153600};
export const stats9: stats = {kmWeek: 72, slopeWeek: 3100, kmMonth: 328, slopeMonth: 12400, kmYear: 3756, slopeYear: 148800};
export const stats10: stats = {kmWeek: 65, slopeWeek: 2900, kmMonth: 290, slopeMonth: 11600, kmYear: 3220, slopeYear: 139200};
export const stats11: stats = {kmWeek: 84, slopeWeek: 3800, kmMonth: 366, slopeMonth: 15200, kmYear: 4375, slopeYear: 182400};
export const stats12: stats = {kmWeek: 98, slopeWeek: 5400, kmMonth: 352, slopeMonth: 21600, kmYear: 3235, slopeYear: 259200};
export const stats13: stats = {kmWeek: 74, slopeWeek: 4100, kmMonth: 276, slopeMonth: 16400, kmYear: 3863, slopeYear: 196800};
export const stats14: stats = {kmWeek: 96, slopeWeek: 5200, kmMonth: 334, slopeMonth: 20800, kmYear: 4216, slopeYear: 249600};
export const stats15: stats = {kmWeek: 102, slopeWeek: 5800, kmMonth: 408, slopeMonth: 23200, kmYear: 4176, slopeYear: 278400};
export const stats16: stats = {kmWeek: 75, slopeWeek: 4000, kmMonth: 312, slopeMonth: 16000, kmYear: 3672, slopeYear: 192000};
export const stats17: stats = {kmWeek: 62, slopeWeek: 3100, kmMonth: 276, slopeMonth: 12400, kmYear: 3871, slopeYear: 148800};
export const stats18: stats = {kmWeek: 58, slopeWeek: 2600, kmMonth: 272, slopeMonth: 10400, kmYear: 3900, slopeYear: 124800};
export const stats19: stats = {kmWeek: 93, slopeWeek: 4700, kmMonth: 322, slopeMonth: 18800, kmYear: 4254, slopeYear: 225600};
export const stats20: stats = {kmWeek: 75, slopeWeek: 3800, kmMonth: 298, slopeMonth: 15200, kmYear: 4183, slopeYear: 182400};

export const groupStats1: stats = {kmWeek: 228, slopeWeek: 9600, kmMonth: 1062, slopeMonth: 38400, kmYear: 9744, slopeYear: 460800};
export const groupStats2: stats = {kmWeek: 375, slopeWeek: 19000, kmMonth: 1490, slopeMonth: 76000, kmYear: 20915, slopeYear: 912000};
export const groupStats3: stats = {kmWeek: 232, slopeWeek: 10400, kmMonth: 544, slopeMonth: 52000, kmYear: 15600, slopeYear: 499200};
export const groupStats4: stats = {kmWeek: 248, slopeWeek: 12400, kmMonth: 1104, slopeMonth: 49600, kmYear: 15484, slopeYear: 595200};
export const groupStats5: stats = {kmWeek: 207, slopeWeek: 9000, kmMonth: 678, slopeMonth: 36000, kmYear: 9408, slopeYear: 432000};

const routeHistory1: routeHistory = {date: "12/05/2022", idRoute: 101}
const routeHistory2: routeHistory = {date: "23/07/2022", idRoute: 102}

export const user1 = new User(201, "Ana", "correr", [202, 203], [202], stats1, [101, 102], [1, 3], [routeHistory1, routeHistory2]);
export const user2 = new User(202, "Juan", "correr", [205, 214, 216], [205, 216], stats2, [107], [2], [routeHistory1, routeHistory2]);
export const user3 = new User(203, "María", "bicicleta", [201, 206], [201], stats3, [106, 108], [2, 3], [routeHistory1, routeHistory2]);
export const user4 = new User(204, "Luis", "bicicleta", [220], [220], stats4, [103], [1], [routeHistory1, routeHistory2]);
export const user5 = new User(205, "Sofía", "correr", [208, 209, 211], [209, 211], stats5, [107, 109, 110], [2], [routeHistory1, routeHistory2]);
export const user6 = new User(206, "Carlos", "correr", [204, 205, 217, 219, 220], [205, 206, 217], stats6, [105, 107], [1], [routeHistory1, routeHistory2]);
export const user7 = new User(207, "Laura", "correr", [206, 208, 209, 210], [208, 209], stats7, [103, 106, 108], [1, 2], [routeHistory1, routeHistory2]);
export const user8 = new User(208, "José", "bicicleta", [201, 213], [201], stats8, [104], [3], [routeHistory1, routeHistory2]);
export const user9 = new User(209, "Pablo", "bicicleta", [219], [219], stats9, [102, 105], [2, 3], [routeHistory1, routeHistory2]);
export const user10 = new User(210, "Miguel", "bicicleta", [213, 214], [214], stats10, [106], [], [routeHistory1, routeHistory2]);
export const user11 = new User(211, "Carmen", "bicicleta", [206, 207, 218], [206, 218], stats11, [107, 108], [1], [routeHistory1, routeHistory2]);
export const user12 = new User(212, "David", "correr", [211, 212, 215], [212, 215], stats12, [109], [1], [routeHistory1, routeHistory2]);
export const user13 = new User(213, "Patricia", "bicicleta", [211, 214], [211], stats13, [110], [1, 3], [routeHistory1, routeHistory2]);
export const user14 = new User(214, "Pedro", "correr", [218, 220], [218], stats14, [105, 107, 108], [1, 2], [routeHistory1, routeHistory2]);
export const user15 = new User(215, "Paola", "bicicleta", [203, 205, 211], [203, 205], stats15, [104], [2, 3], [routeHistory1, routeHistory2]);
export const user16 = new User(216, "Jorge", "bicicleta", [204], [204], stats16, [101, 103], [1], [routeHistory1, routeHistory2]);
export const user17 = new User(217, "Daniela", "correr", [205], [205], stats17, [108], [], [routeHistory1, routeHistory2]);
export const user18 = new User(218, "Roberto", "correr", [207, 209, 217], [207, 209], stats18, [101, 102, 105], [1, 2], [routeHistory1, routeHistory2]);
export const user19 = new User(219, "Andrea", "bicicleta", [208, 213], [208, 213], stats19, [105, 108, 109, 110], [2], [routeHistory1, routeHistory2]);
export const user20 = new User(220, "Eduardo", "correr", [209, 212, 219], [212, 220], stats20, [109, 110], [3], [routeHistory1, routeHistory2]);

export const group1 = new Group(301, "Los Caminantes", [206, 208, 209], groupStats1, [route2, route4, route5], [routeHistory1, routeHistory2]);
export const group2 = new Group(302, "Senderistas en Acción", [207, 210, 212, 214, 215], groupStats2, [route3, route4, route8], [routeHistory1, routeHistory2]);
export const group3 = new Group(303, "Exploradores de la Naturaleza", [201, 202, 204, 217], groupStats3, [route5, route7], [routeHistory1, routeHistory2]);
export const group4 = new Group(304, "Pasos de Montaña", [203, 205, 213, 216], groupStats4, [route1, route10], [routeHistory1, routeHistory2]);
export const group5 = new Group(305, "Andarines Aventureros", [218, 219, 220], groupStats5, [route7, route9], [routeHistory1, routeHistory2]);

export const chall1 = new Challenge(1, "Tres Cumbres", [route1, route2, route5], "bicicleta", [user1, user3, user7]);
export const chall2 = new Challenge(2, "Vuelta Tenerife", [route6, route4, route3, route7, route10], "corriendo", [user2, user4]);
export const chall3 = new Challenge(3, "Estrellas", [route8, route9], "bicicleta", [user5, user6, user8, user9, user10]);
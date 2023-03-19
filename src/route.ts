export type coords = {
  x: number;
  y: number;
}

/**
 * Routes that are include in the system.
 */
export class Route {
  private id: number;
  private name: string;
  private startCoords: coords;
  private endCoords: coords;
  private length: number;
  private avarageSlope: number;
  private usersIds: number[];
  private activityType: string;
  private rating: number;

  /**
   * Routes' constructor.
   * @param id Route id.
   * @param name Route name.
   * @param startCoords Start geolocation. 
   * @param endCoords End geolocation.
   * @param length Routes length (Kms).
   * @param avarageSlope Avarage slope of the route.
   * @param activityType Indicate if the route can be completed by bike or running.
   * @param rating Avarage route rating.
   */
  constructor(id, name, startCoords, endCoords, length, avarageSlope, usersIds, activityType, rating) {
    this.id = id;
    this.name = name;
    this.startCoords = startCoords;
    this.endCoords = endCoords;
    this.length = length;
    this.avarageSlope = avarageSlope;
    this.usersIds = usersIds;
    this.activityType = activityType;
    this.rating = rating;
  }

  /**
   * Get route name.
   * @returns Route name.
   */
  getName() {
    return this.name;
  }

  /**
   * Get amount of users.
   * @returns users quantity.
   */
  getUsersQuantity() {
    return this.usersIds.length;
  }

  /**
   * Get routes length (Kms).
   * @returns Routes length (Kms).
   */
  getLength() {
    return this.length;
  }

  /**
   * Get route activity.
   * @returns Activity type.
   */
  getActivityType() {
    return this.activityType;
  }

  /**
   * Get route rating.
   * @returns Avarage route rating.
   */
  getRating() {
    return this.rating;
  }

  /**
   * Print the route.
   * @returns The string with the result.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.usersIds.length; i++) {
      if (i < this.usersIds.length - 1) {
        str += this.usersIds[i] + ", ";
      } else {
        str += this.usersIds[i]
      }
    }
    const result = (`Id: ${this.id}
Nombre: ${this.name}
Geolocalización de inicio: ${this.startCoords.x}, ${this.startCoords.y}
Geolocalización del final: ${this.endCoords.x}, ${this.endCoords.y}
Longitud de la ruta: ${this.length} kilómetros
Desnivel medio de la ruta: ${this.avarageSlope} metros
Ids de los usuarios que han realizado la ruta: ${str}
Actividad: ${this.activityType}
Calificación media: ${this.rating}`);
return result;
  }
}
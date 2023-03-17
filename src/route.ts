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



  // /**
  //  * Get route id.
  //  * @returns Route id.
  //  */
  // getId() {
  //   return this.id;
  // }

  /**
   * Get route name.
   * @returns Route name.
   */
  getName() {
    return this.name;
  }

  // /**
  //  * Get start geolocation.
  //  * @returns Start Coordinates.
  //  */
  // getStartCoords() {
  //   return this.startCoords;
  // }

  // /**
  //  * Get end geolocation.
  //  * @returns End Coordinates.
  //  */
  // getEndCoords() {
  //   return this.endCoords;
  // }

  /**
   * Get routes length (Kms).
   * @returns Routes length (Kms).
   */
  getLength() {
    return this.length;
  }

  // /**
  //  * Get avarege slope of the route.
  //  * @returns number of avarage slope.
  //  */
  // getAvarageSlope() {
  //   return this.avarageSlope;
  // }

  // /**
  //  * Get route activity.
  //  * @returns 
  //  */
  // getActivityType() {
  //   return this.activityType;
  // }

  // getScore() {
  //   return this.rating;
  // }
}
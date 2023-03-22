import { Route } from "./route";
import { Collection } from "./collection";

/**
 * Route collection extended from abstract class Colection.
 */
export class RouteCollection extends Collection<Route> {
  /**
   * Constructor's class.
   * @param routes array of routes.
   */
  constructor(routes: Route[]) {
    super(routes);
  }

  /**
   * Sort routes based on name alphabetically in ascending order.
   * @returns the routes collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort routes based on name alphabetically in descending order.
   * @returns the routes collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort routes based on the amount of users in ascending order.
   * @returns the routes collection sorted. 
   */
  usersQuantitySortAscend() {
    return this.items.sort((a, b) => a.getUsersQuantity() - b.getUsersQuantity());
  }

  /**
   * Sort routes based on the amount of users in descending order.
   * @returns 
   */
  usersQuantitySortDescend() {
    return this.items.sort((a, b) => b.getUsersQuantity() - a.getUsersQuantity());
  }

  /**
   * Sort routes based on the Route's length is ascending order.
   * @returns the routes collection sorted. 
   */
  lengthSortAscend() {
    return this.items.sort((a, b) => a.getLength() - b.getLength());
  }

  /**
   * Sort routes based on the Route's length is descending order.
   * @returns the routes collection sorted. 
   */
  lengthSortDescend() {
    return this.items.sort((a, b) => b.getLength() - a.getLength());
  }

  /**
   * Sort routes based on the rating in ascending order.
   * @returns the routes collection sorted. 
   */
  ratingSortAscend() {
    return this.items.sort((a, b) => a.getRating() - b.getRating());
  }

  /**
   * Sort routes based on the rating in descending order.
   * @returns the routes collection sorted. 
   */
  ratingSortDescend() {
    return this.items.sort((a, b) => b.getRating() - a.getRating());
  }

  /**
   * Sort routes based on the activity (bike).
   * @returns the routes collection sorted. 
   */
  bikeActivitySort() {
    return this.items.sort((a,b) => a.getActivityType().localeCompare(b.getActivityType()) )
  }

  /**
   * Sort routes based on the activity (running).
   * @returns the routes collection sorted. 
   */
  runningActivitySort() {
    return this.items.sort((a,b) => b.getActivityType().localeCompare(a.getActivityType()) )
  }
  
  /**
   * Get the length collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  printNames(){
    this.items.forEach(route => {
        console.log(route.getId(), route.getName())
    });
  }

  getRouteById(id: number){
    return this.items.find((route) => route.getId() === id);
  }
}
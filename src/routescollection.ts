import { Route } from "./route";
import { Collection } from "./collection";

import { coords } from "./route";

export class RouteCollection extends Collection<Route> {
  constructor(routes: Route[]) {
    super(routes);
  }

  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  usersQuantitySortAscend() {
    return this.items.sort((a, b) => a.getUsersQuantity() - b.getUsersQuantity());
  }

  usersQuantitySortDescend() {
    return this.items.sort((a, b) => b.getUsersQuantity() - a.getUsersQuantity());
  }

  lengthSortAscend() {
    return this.items.sort((a, b) => a.getLength() - b.getLength());
  }

  lengthSortDescend() {
    return this.items.sort((a, b) => b.getLength() - a.getLength());
  }

  ratingSortAscend() {
    return this.items.sort((a, b) => a.getRating() - b.getRating());
  }

  ratingSortDescend() {
    return this.items.sort((a, b) => b.getRating() - a.getRating());
  }

  bikeActivitySort() {
    return this.items.sort((a,b) => a.getActivityType().localeCompare(b.getActivityType()) )
  }
  runningActivitySort() {
    return this.items.sort((a,b) => b.getActivityType().localeCompare(a.getActivityType()) )
  }
  
  getLength() {
    return this.items.length;
  }

}
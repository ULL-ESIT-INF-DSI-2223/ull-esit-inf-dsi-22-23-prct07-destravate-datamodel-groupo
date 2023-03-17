import { Route } from "./route";
import { Collection } from "./collection";

import { coords } from "./route";

export class RouteCollection extends Collection<Route> {
  constructor(routes: Route[]) {
    super(routes);
  }

  
}
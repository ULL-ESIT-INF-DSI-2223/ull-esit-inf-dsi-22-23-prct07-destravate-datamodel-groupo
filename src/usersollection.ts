import { User } from "./users";
import { Collection } from "./collection";

export class UserCollection extends Collection<User> {
  constructor(users: User[]) {
    super(users)
  }

  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStat().kmWeek - b.getStat().kmWeek)
  }

  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStat().kmWeek - a.getStat().kmWeek)
  }

  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStat().kmMonth - b.getStat().kmMonth)
  }

  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStat().kmMonth - a.getStat().kmMonth)
  }

  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStat().kmYear - b.getStat().kmYear)
  }

  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStat().kmYear - a.getStat().kmYear)
  }  

  getLength() {
    return this.items.length;
  }
}

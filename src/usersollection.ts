import { User } from "./users";
import { Collection } from "./collection";

/**
 * User collection extended from abstract class Colection.
 */
export class UserCollection extends Collection<User> {
  constructor(users: User[]) {
    super(users)
  }

  /**
   * Sort users based on names alphabetically in ascending order.
   * @returns the user collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort users based on names alphabetically in descending order.
   * @returns 
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort users based on Kms per week in ascending order.
   * @returns 
   */
  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  /**
   * Sort users based on Kms per week in descending order.
   * @returns 
   */
  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  /**
   * Sort users based on Kms per month in ascending order.
   * @returns 
   */
  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  /**
   * Sort users based on Kms per month in descending order.
   * @returns 
   */
  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  /**
   * Sort users based on Kms per year in ascending order.
   * @returns 
   */
  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  /**
   * Sort users based on Kms per year in descending order.
   * @returns 
   */
  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  /**
   * Get the length collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  getUserbyId(id: number) {
    return this.items.find((user) => user.id === id);
  }

  showUsers() {
    this.items.forEach((user) => {
      console.log(user.id);
    });
  }

};
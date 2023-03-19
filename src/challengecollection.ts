import { Challenge } from "./challenge";
import { Collection } from "./collection";

/**
 * Challenge collection extended from abstract class Colection.
 */
export class ChallengeCollection extends Collection<Challenge> {
  constructor(challenges: Challenge[]){
    super(challenges);
  }
  
  /**
   * Sort challenges based on names alphabetically in ascending order.
   * @returns the challenge collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort challenges based on names alphabetically in descending order.
   * @returns the challenge collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName())* (-1));
  }

  /**
   * Sort challenges based on Kms in ascending order.
   * @returns the challenge collection sorted.
   */
  kmsSortAscend() {
    return this.items.sort((a, b) => a.getTotalKms() - b.getTotalKms());
  }

  /**
   * Sort the challenges based on Kms in descending order.
   * @returns the challenge collection sorted.
   */
  kmsSortDescend() {
    return this.items.sort((a, b) => b.getTotalKms() - a.getTotalKms());
  }


  // userSortAscend() {
  //   return this.items.sort((a, b) => a.)
  // }

  // userSortDescend() {

  // }

  /**
   * Get the length collection.
   * @returns the length collection.
   */
    getLength() {
      return this.items.length;
    }
}
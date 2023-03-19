import { Challenge } from "./challenge";
import { Collection } from "./collection";

/**
 * Challenge collection extended from abstract class Colection.
 */
export class ChallengeCollection extends Collection<Challenge> {
  /**
   * Constructor's class.
   * @param challenges array of challenges.
   */
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

  /**
   * Sort the challenges based on the number of users in ascending order.
   * @returns the challenge collection sorted.
   */
  userSortAscend() {
    return this.items.sort((a, b) => a.getNumberofUser() - b.getNumberofUser())
  }

  /**
   * Sort the challenges based on the number of users in descending order.
   * @returns the challenge collection sorted,
   */
  userSortDescend() {
    return this.items.sort((a, b) => b.getNumberofUser() - a.getNumberofUser())
  }

  /**
   * Get the length collection.
   * @returns the length collection.
   */
    getLength() {
      return this.items.length;
    }
}
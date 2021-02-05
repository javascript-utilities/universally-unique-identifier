export {};


declare global {
  namespace UUID {
    /**
     * Defines static propeties and methods
     */
    export interface Static_Bits<T> {
      new(...args: unknown[]): T;
      generated_uuids: string[];
      popUUID(): (string | undefined);
    }

    /**
     * Defines instance propeties and methods
     */
    export interface Universally_Unique_Identifier extends String {}
  }
}


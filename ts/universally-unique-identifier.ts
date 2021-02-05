
'use strict';



/**
 * Thanks be to @theseyi of GitHub
 * @see {link} https://github.com/microsoft/TypeScript/issues/14600#issuecomment-488817980
 */
const Static_Contract = <T extends new (...args: unknown[]) => void>(): ((c: T) => void) => (_ctor: T): void => {};


/**
 * Enables static methods to be called from within class methods
 * @see {link} - https://github.com/Microsoft/TypeScript/issues/3841
 */
interface Universally_Unique_Identifier extends UUID.Universally_Unique_Identifier {
  constructor: typeof Universally_Unique_Identifier;
}


/**
 * Extends `String` to build UUIDs that are truly unique for current scope
 * @example
 * const uuid_one = new Universally_Unique_Identifier();
 * const uuid_two = new Universally_Unique_Identifier();
 *
 * console.assert(uuid_one.toString() !== uuid_two.toString());
 *
 * console.log(`uuid_one -> ${uuid_one}`);
 * //> uuid_one -> 5340a411-e6f7-4afa-8b99-d3f0f6688a5e
 *
 * console.log(`uuid_two -> ${uuid_two}`);
 * //> uuid_two -> c271d4f0-9b47-4736-a787-7ba6c4932661
 * @author S0AndS0
 * @license AGPL-3.0
 */
@Static_Contract<UUID.Static_Bits<Universally_Unique_Identifier>>()
class Universally_Unique_Identifier extends String implements Universally_Unique_Identifier {
  /**
   * Scope storage of all UUIDs generated by class instances
   */
  static generated_uuids: string[] = [];


  /**
   * Gross hack of `super` call with closure-like arrow function
   * @notes
   * - `super` cannot reference `this`
   * - `super` must proceed any `this.__prop__` assignments
   */
  constructor() {
    super((() => {
      /**
       * Builds version 4 compatible UUID string
       * @function newUUID
       * @return {string}
       */
      const newUUID = () => {
        // Int of low 32 bits of time
        const time_low = 'xxxxxxxx';

        // Int of middle 16 bits of time
        const time_mid = 'xxxx';

        // 4-bit "version" of most significatn bits followed by high 12 bits of time
        const time_hi_and_version = '4xxx';

        // 1 to 3 bit "variant" in most significant bits followed by 13 to 15 bit clock sequence
        const clock_seq_hi_and_res__clock_seq_low = 'yxxx';

        // 48 bit node ID
        const node_id = 'xxxxxxxxxxxx';

        return [
          time_low,
          time_mid,
          time_hi_and_version,
          clock_seq_hi_and_res__clock_seq_low,
          node_id,
        ].map((chunk) => {
          return chunk.replace(/[xy]/g, (c) => {
            const random = Math.random() * 16 | 0;
            if (c === 'x') {
              return random.toString(16);
            } else {
              return (random & 0x3 | 0x8).toString(16);
            }
          });
        }).join('-');
      }

      let uuid = newUUID();
      /* istanbul ignore next */
      while (Universally_Unique_Identifier.generated_uuids.includes(uuid)) {
        uuid = newUUID();
      }
      Universally_Unique_Identifier.generated_uuids.push(uuid);
      return uuid;
    })());
  }

  /* istanbul ignore next */
  static popUUID(): (string | undefined) {
    return this.generated_uuids.pop();
  }
}


/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = { Universally_Unique_Identifier };
}


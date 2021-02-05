#!/usr/bin/env node


'use strict';


interface Tests__Universally_Unique_Identifier {
  universally_unique_identifier: UUID.Static_Bits<UUID.Universally_Unique_Identifier>;
}

interface Tests__Universally_Unique_Identifier__Static extends Tests__Universally_Unique_Identifier {}


/**
 * @author S0AndS0
 * @license AGPL-3.0
 */
class Tests__Universally_Unique_Identifier implements Tests__Universally_Unique_Identifier {
  /**
   *
   */
  constructor() {
    this.universally_unique_identifier = require('../universally-unique-identifier').Universally_Unique_Identifier;
  }

  /**
   *
   */
  runTests() {
    this.testsConstructor();
    this.testsStaticProperties();
    this.testsStaticMethods();
  }

  /**
   *
   */
  testsConstructor() {
    test('constructor -> Does the constructor deliver?', () => {
      const uuid = new this.universally_unique_identifier();

      expect(uuid).toBeDefined();
    });

    // test('constructor ->', () => {});
  }

  /**
   *
   */
  testsStaticProperties() {
    test('generated_uuids -> Is the list for generated UUIDs growing?', () => {
      const uuid_one = new this.universally_unique_identifier();
      const uuid_two = new this.universally_unique_identifier();

      expect(this.universally_unique_identifier.generated_uuids.length).toBeGreaterThanOrEqual(2);
    });
  }

  /**
   *
   */
  testsStaticMethods() {
    test('popUUID -> Is it possible to remove UUIDs from storage?', () => {
      while (this.universally_unique_identifier.length > 0) {
        const old_uuid = this.universally_unique_identifier.popUUID();
        expect(typeof old_uuid === 'string').toBeTruthy();
      }
    });
  }
}


const tests_universally_unique_identifier = new Tests__Universally_Unique_Identifier();
tests_universally_unique_identifier.runTests();


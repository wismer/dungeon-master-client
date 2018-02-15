/**
 * @flow
 * @relayHash 286106712df397e8dc0f229dbdd3eb81
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CharacterCreateMutationVariables = {|
  input: {
    race?: ?string;
    characterName?: ?string;
    characterClass?: ?string;
  };
|};
export type CharacterCreateMutationResponse = {|
  +createCharacter: ?{|
    +id: ?string;
    +race_id: ?string;
    +character_class_id: ?string;
    +name: ?string;
  |};
|};
*/


/*
mutation CharacterCreateMutation(
  $input: CreateCharacterInput!
) {
  createCharacter(input: $input) {
    id
    race_id
    character_class_id
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCharacterInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CharacterCreateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCharacterInput!"
          }
        ],
        "concreteType": "CreateCharacterPayload",
        "name": "createCharacter",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "race_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "character_class_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CharacterCreateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCharacterInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CharacterCreateMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCharacterInput!"
          }
        ],
        "concreteType": "CreateCharacterPayload",
        "name": "createCharacter",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "race_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "character_class_id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CharacterCreateMutation(\n  $input: CreateCharacterInput!\n) {\n  createCharacter(input: $input) {\n    id\n    race_id\n    character_class_id\n    name\n  }\n}\n"
};

module.exports = batch;

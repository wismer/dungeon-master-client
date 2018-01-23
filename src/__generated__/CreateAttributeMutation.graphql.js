/**
 * @flow
 * @relayHash 74a7ad302f8232dc0a48d7eafaa588c2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateAttributeMutationVariables = {|
  input: {
    name: string;
    description: string;
  };
|};
export type CreateAttributeMutationResponse = {|
  +addAbility: ?{|
    +abilities: ?$ReadOnlyArray<?{|
      +id: string;
      +name: ?string;
      +description: ?string;
      +created_at: ?string;
      +updated_at: ?string;
    |}>;
  |};
|};
*/


/*
mutation CreateAttributeMutation(
  $input: AddAbilityInput!
) {
  addAbility(input: $input) {
    abilities {
      id
      name
      description
      created_at
      updated_at
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddAbilityInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateAttributeMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddAbilityInput!"
          }
        ],
        "concreteType": "AbilityList",
        "name": "addAbility",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Ability",
            "name": "abilities",
            "plural": true,
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
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "created_at",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "updated_at",
                "storageKey": null
              }
            ],
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
  "name": "CreateAttributeMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddAbilityInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateAttributeMutation",
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
            "type": "AddAbilityInput!"
          }
        ],
        "concreteType": "AbilityList",
        "name": "addAbility",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Ability",
            "name": "abilities",
            "plural": true,
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
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "created_at",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "updated_at",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateAttributeMutation(\n  $input: AddAbilityInput!\n) {\n  addAbility(input: $input) {\n    abilities {\n      id\n      name\n      description\n      created_at\n      updated_at\n    }\n  }\n}\n"
};

module.exports = batch;

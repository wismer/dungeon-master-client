/**
 * @flow
 * @relayHash 2712f03677f22552b4f5f23c363b830d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateSceneMutationVariables = {|
  input: {
    name?: ?string;
    description?: ?string;
    campaign_id?: ?string;
  };
|};
export type CreateSceneMutationResponse = {|
  +createScene: ?{|
    +name: ?string;
    +description: ?string;
    +id: ?string;
    +created_at: ?string;
    +updated_at: ?string;
    +campaign_id: ?string;
  |};
|};
*/


/*
mutation CreateSceneMutation(
  $input: CreateSceneInput!
) {
  createScene(input: $input) {
    name
    description
    id
    created_at
    updated_at
    campaign_id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateSceneInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSceneMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateSceneInput!"
          }
        ],
        "concreteType": "CreateScenePayload",
        "name": "createScene",
        "plural": false,
        "selections": [
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
            "name": "id",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "campaign_id",
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
  "name": "CreateSceneMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateSceneInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateSceneMutation",
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
            "type": "CreateSceneInput!"
          }
        ],
        "concreteType": "CreateScenePayload",
        "name": "createScene",
        "plural": false,
        "selections": [
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
            "name": "id",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "campaign_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateSceneMutation(\n  $input: CreateSceneInput!\n) {\n  createScene(input: $input) {\n    name\n    description\n    id\n    created_at\n    updated_at\n    campaign_id\n  }\n}\n"
};

module.exports = batch;

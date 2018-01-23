/**
 * @flow
 * @relayHash 580bf8b87bd01e93da683bb762a1756a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SceneHomeQueryResponse = {|
  +getScene: ?{|
    +id: ?string;
    +name: ?string;
    +description: ?string;
    +campaign_id: ?string;
    +created_at: ?string;
    +updated_at: ?string;
  |};
|};
*/


/*
query SceneHomeQuery(
  $campaignId: String!
  $sceneName: String!
) {
  getScene(campaignId: $campaignId, sceneName: $sceneName) {
    id
    name
    description
    campaign_id
    created_at
    updated_at
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "campaignId",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "sceneName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SceneHomeQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "campaignId",
            "variableName": "campaignId",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "sceneName",
            "variableName": "sceneName",
            "type": "String!"
          }
        ],
        "concreteType": "Scene",
        "name": "getScene",
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
            "name": "campaign_id",
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
    "type": "Root"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SceneHomeQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "campaignId",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "sceneName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SceneHomeQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "campaignId",
            "variableName": "campaignId",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "sceneName",
            "variableName": "sceneName",
            "type": "String!"
          }
        ],
        "concreteType": "Scene",
        "name": "getScene",
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
            "name": "campaign_id",
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
    ]
  },
  "text": "query SceneHomeQuery(\n  $campaignId: String!\n  $sceneName: String!\n) {\n  getScene(campaignId: $campaignId, sceneName: $sceneName) {\n    id\n    name\n    description\n    campaign_id\n    created_at\n    updated_at\n  }\n}\n"
};

module.exports = batch;

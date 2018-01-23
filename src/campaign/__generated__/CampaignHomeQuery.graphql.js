/**
 * @flow
 * @relayHash 3482b3ea063284ef9f6883ae3a0c01b2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CampaignHomeQueryResponse = {|
  +campaignView: ?{|
    +title: ?string;
    +id: ?string;
    +created_at: ?string;
    +updated_at: ?string;
    +scenes: ?$ReadOnlyArray<?{|
      +id: ?string;
      +name: ?string;
    |}>;
  |};
|};
*/


/*
query CampaignHomeQuery(
  $campaignId: String!
) {
  campaignView(campaignId: $campaignId) {
    title
    id
    created_at
    updated_at
    scenes {
      id
      name
    }
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
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignHomeQuery",
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
          }
        ],
        "concreteType": "Campaign",
        "name": "campaignView",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
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
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Scene",
            "name": "scenes",
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
              }
            ],
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
  "name": "CampaignHomeQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "campaignId",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CampaignHomeQuery",
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
          }
        ],
        "concreteType": "Campaign",
        "name": "campaignView",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
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
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Scene",
            "name": "scenes",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CampaignHomeQuery(\n  $campaignId: String!\n) {\n  campaignView(campaignId: $campaignId) {\n    title\n    id\n    created_at\n    updated_at\n    scenes {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;

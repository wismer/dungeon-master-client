/**
 * @flow
 * @relayHash 99c02375913f8e6164af9b6de60fc00f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewCampaignMutationVariables = {|
  input: {
    title: string;
  };
|};
export type NewCampaignMutationResponse = {|
  +createCampaign: ?{|
    +campaign: ?{|
      +title: ?string;
      +id: ?string;
      +created_at: ?string;
      +updated_at: ?string;
    |};
  |};
|};
*/


/*
mutation NewCampaignMutation(
  $input: CreateCampaignInput!
) {
  createCampaign(input: $input) {
    campaign {
      title
      id
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
        "type": "CreateCampaignInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewCampaignMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCampaignInput!"
          }
        ],
        "concreteType": "CreateCampaignPayload",
        "name": "createCampaign",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Campaign",
            "name": "campaign",
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
  "name": "NewCampaignMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCampaignInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "NewCampaignMutation",
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
            "type": "CreateCampaignInput!"
          }
        ],
        "concreteType": "CreateCampaignPayload",
        "name": "createCampaign",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Campaign",
            "name": "campaign",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation NewCampaignMutation(\n  $input: CreateCampaignInput!\n) {\n  createCampaign(input: $input) {\n    campaign {\n      title\n      id\n      created_at\n      updated_at\n    }\n  }\n}\n"
};

module.exports = batch;

/**
 * @flow
 * @relayHash 03074c2915510a09c78a3ba780e06f5c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewCampaignMutationVariables = {|
  input: {
    title: string;
    setting: string;
    desc: string;
  };
|};
export type NewCampaignMutationResponse = {|
  +createCampaign: ?{|
    +title: ?string;
    +desc: ?string;
    +setting: ?string;
    +url_slug: ?string;
    +id: ?string;
    +created_at: ?string;
    +updated_at: ?string;
  |};
|};
*/


/*
mutation NewCampaignMutation(
  $input: CreateCampaignInput!
) {
  createCampaign(input: $input) {
    title
    desc
    setting
    url_slug
    id
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
            "name": "desc",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "setting",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "url_slug",
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
            "name": "desc",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "setting",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "url_slug",
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
    ]
  },
  "text": "mutation NewCampaignMutation(\n  $input: CreateCampaignInput!\n) {\n  createCampaign(input: $input) {\n    title\n    desc\n    setting\n    url_slug\n    id\n    created_at\n    updated_at\n  }\n}\n"
};

module.exports = batch;

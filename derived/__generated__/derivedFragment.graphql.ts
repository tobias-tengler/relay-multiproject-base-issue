/**
 * @generated SignedSource<<618662857157fd25e6b71a4a474e6a86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type derivedFragment$data = {
  readonly user: {
    readonly name: string;
  };
  readonly " $fragmentType": "derivedFragment";
};
export type derivedFragment$key = {
  readonly " $data"?: derivedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"derivedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "derivedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "394ac9e0416659c1bcd54d3d9fb0ebb3";

export default node;

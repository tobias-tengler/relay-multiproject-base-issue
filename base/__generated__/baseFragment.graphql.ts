/**
 * @generated SignedSource<<f13454e2b812e9c95e34ac018ca410c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type baseFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "baseFragment";
};
export type baseFragment$key = {
  readonly " $data"?: baseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"baseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "baseFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "cf23b1016277de917a29d8993ed6658a";

export default node;

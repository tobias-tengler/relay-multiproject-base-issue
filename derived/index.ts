import { graphql } from "relay-runtime";

graphql`
  fragment derivedFragment on Query {
    user {
      name
    }
  }
`;

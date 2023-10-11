import { graphql } from "relay-runtime";

graphql`
  fragment baseFragment on User {
    name
  }
`;

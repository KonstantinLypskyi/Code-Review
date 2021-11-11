import { gql } from "@apollo/client";

const USERS = gql`
  query SearchUsers {
    search(query: "", type: USER, first: 100) {
      edges {
        node {
          ... on User {
            avatarUrl
            login
            url
            id
          }
        }
      }
    }
  }
`;

const USER = gql`
  query User($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      name
      followers(first: 10) {
        nodes {
          login
          name
        }
      }
      following(first: 10) {
        nodes {
          login
          name
        }
      }
      createdAt
      company
      email
      location
      bio
    }
  }
`;

const Queries = { USERS, USER };

export default Queries;

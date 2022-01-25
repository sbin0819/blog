import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      data {
        id
        attributes {
          title
          description
          createdAt
        }
      }
    }
  }
`;

export const GET_CHARECTER = gql`
  query getCharecter($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
      }
      location {
        name
        dimension
      }
    }
  }
`;

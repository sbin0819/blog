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
    posts(pagination:{page:1, pageSize:8},sort: "createdAt:desc") {
      data {
        id
        attributes {
          title
          summary
          imageUrl
          description
          createdAt
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_FILTERED_POSTS_BY_USER = gql`
query getFiteredPosts{
   posts(filters:{user: {username:{contains:"user3"}}}, pagination:{page:1, pageSize:24}, sort: ["createdAt:desc"]) {
      data {
        attributes {
          title
          description
          createdAt
          imageUrl
          publishedAt
          summary
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
}
`

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

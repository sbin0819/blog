import { gql } from '@apollo/client';

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

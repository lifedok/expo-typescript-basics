import { gql } from "@apollo/client";

const POKEMON_LIST_GQL_QUERY = gql`
  query GetPokemons {
    locations {
      id
      name
      description
      photo
    }
  }
`;

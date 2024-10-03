import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
  query {
    matches {
      championship
      date
      detailsLink
      venue
      homeTeam {
        name
        abbreviation
        logoUrl
      }
      awayTeam {
        name
        abbreviation
        logoUrl
      }
    }
  }
`;

import { gql } from 'apollo-angular';

export const AGE = gql`
  fragment age on PersonModel {
    age {
      years
      months
      days
      shortString
      longString
    }
  }
`;

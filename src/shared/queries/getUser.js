import gql from 'graphql-tag';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
      avatarUrl
      email
      location
      repositories(last: 5, orderBy: { field: UPDATED_AT, direction: ASC }) {
        nodes {
          id
          name
        }
      }
    }
  }
`;

export default GET_USER;

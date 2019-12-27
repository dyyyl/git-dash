import gql from 'graphql-tag';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
      isHireable
      avatarUrl
      email
      location
      repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          id
          name
          languages(first: 10) {
            nodes {
              id
              name
              color
            }
          }
        }
      }
    }
  }
`;

export default GET_USER;

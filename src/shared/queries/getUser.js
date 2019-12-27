import gql from 'graphql-tag';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
      isHireable
      createdAt
      avatarUrl
      followers(first: 100) {
        nodes {
          id
        }
      }
      email
      location
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
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

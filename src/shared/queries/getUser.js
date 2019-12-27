import gql from 'graphql-tag';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
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
          createdAt
          description
          url
          languages(first: 10) {
            nodes {
              id
              name
              color
            }
          }
          stargazers(first: 100) {
            nodes {
              id
            }
          }
          forks(first: 100) {
            nodes {
              id
            }
          }
        }
      }
    }
  }
`;

export default GET_USER;

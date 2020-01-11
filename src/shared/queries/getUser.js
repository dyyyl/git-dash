import gql from 'graphql-tag';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      id
      name
      bio
      createdAt
      avatarUrl
      followers {
        totalCount
      }
      email
      location
      repositories(first: 3, orderBy: { field: STARGAZERS, direction: DESC }) {
        totalCount
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
            totalCount
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`;

export default GET_USER;

export default {
  client: {
    service: {
      name: "smartschool-srv",
      url: "http://localhost:5000/graphql/",
      skipSSLValidation: true,
    },
    includes: ['./src/app/shared/*.ts'],
    tagName: 'gql',
  },
};

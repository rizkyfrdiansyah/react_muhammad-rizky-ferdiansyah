import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flexible-snapper-99.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "NJY8shcLo3vFwJvmYJe5tOQB2YqOMY7sexnBnifVqCINNidlJ7cbzJ15X51tnbpu",
  },
});

export default client;

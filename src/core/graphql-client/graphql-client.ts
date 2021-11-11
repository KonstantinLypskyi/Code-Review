import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

// Use Personal access tokens for auth like `Bearer 8agef8aegf7ahefhad9f0af8dfsdf` etc...
//https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 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`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

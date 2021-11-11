import { FC } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Queries from "./core/graphql-client/graphql-queries";

import "./App.css";

import type { User } from "./app.type";

const App: FC = () => {
  const { loading, data } = useQuery(Queries.USERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  return (
    <div className="App">
      <div className="users">
        <h1 className="users__title">Github users</h1>

        {!loading && data ? (
          <div className="users__box">
            {data.search.edges.map(({ node }: User) => {
              return (
                <Link to={`/user/${node.login}`} key={node.id}>
                  <div className="user">
                    <div className="user__avatar">
                      <img src={node.avatarUrl} alt="" />
                    </div>
                    <div className="user__info">
                      <div className="user__login">{node.login}</div>
                      <div className="user__url">{node.url}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default App;

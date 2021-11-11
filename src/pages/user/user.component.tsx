import type { FC } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Queries from "../../core/graphql-client/graphql-queries";

import type { UserPersonalInfo } from "../../app.type";

const User: FC = () => {
  const params = useParams();

  console.log(params);

  const { loading, data } = useQuery<UserPersonalInfo>(Queries.USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      login: params.id,
    },
  });

  console.log(data);

  return (
    <div className="user__page">
      {!loading && data ? (
        <>
          <h1 className="user__page-name">{data?.user.name}</h1>

          <div className="user__page-box">
            <div className="user__page-image">
              <img src={data?.user.avatarUrl} alt="" />
            </div>

            <div className="user__page-info">
              <div>{data?.user.login}</div>

              <div>{data?.user.createdAt}</div>

              {data?.user.company && <div>{data?.user.company}</div>}

              {data?.user.email && <div>{data?.user.email}</div>}

              {data?.user.location && <div>{data?.user.location}</div>}

              {data?.user.bio && <div>{data?.user.bio}</div>}

              {data?.user.followers.nodes.length !== 0 && (
                <>
                  <h2>Followers</h2>

                  <div className="user__page-followers">
                    {data?.user.followers.nodes.map((user) => {
                      return (
                        <div key={user.login}>
                          <div>{user.name}</div>
                          <div>{user.login}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {data?.user.following.nodes.length !== 0 && (
                <>
                  <h2>Following</h2>

                  <div className="user__page-following">
                    {data?.user.following.nodes.map((user) => {
                      return (
                        <div key={user.login}>
                          <div>{user.name}</div>
                          <div>{user.login}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="user__page-followers"></div>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default User;

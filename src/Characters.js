import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

function Characters() {
    return (
        <Query
            query={gql`
            {
              characters {
                results {
                  id
                  name
                  status
                }
              }
            }
          `}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error!</p>;

                return data.characters.results.map(character => {
                    return <div>
                      <p key={character.id}>{character.name}</p>
                      <p>{character.status}</p>
                    </div>    
                });
            }}
        </Query>
    );
}

export default Characters
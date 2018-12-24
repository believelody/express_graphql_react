import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success
    }
  }
`;

class Launches extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) =>
            <>
              { loading && <h4>Loading...</h4> }
              {
                !loading && error &&
                <>
                  <h4>Something went wrong!</h4>
                  <h6>{JSON.stringify(error)}</h6>
                </>
              }
              { !loading && data && data.launches &&
                data.launches.map(launch =>
                  <LaunchItem key={launch.flight_number} data={launch} />
                )
              }
            </>
          }
        </Query>
      </div>
    )
  }
}

export default Launches;

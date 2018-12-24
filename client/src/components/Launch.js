import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number,
      mission_name,
      launch_year,
      launch_success,
      launch_date_local,
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
    }
  }
`;

class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <div>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {
            ({ loading, error, data }) =>
            <>
              { loading && <h4>Loading...</h4> }
              { !loading && error && console.log(error) }
              {
                !loading && data && data.launch &&
                <>
                  <button onClick={() => this.props.history.goBack()} className='btn btn-secondary'>Back</button>
                  <h1 className="display-4 my-3">
                    <span className="text-dark">Mission:</span>{' '}{data.launch.mission_name}
                  </h1>
                  <h4 className='mb-3'>Launch Details</h4>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      Flight number: {data.launch.flight_number}
                    </li>
                    <li className='list-group-item'>
                      Launch Year: {data.launch.launch_year}
                    </li>
                    <li className='list-group-item'>
                      Launch Successful:
                      <span className={classNames({
                        'text-success': data.launch.launch_success,
                        'text-danger': !data.launch.launch_success
                      })}
                      >
                        {' '}{data.launch.launch_success ? 'Yes' : 'No'}
                      </span>
                    </li>
                  </ul>
                  <h4>Rocjet Details</h4>
                  <ul className='list-group'>
                    <li className='list-group-item'>Rocket ID: {data.launch.rocket.rocket_id}</li>
                    <li className='list-group-item'>Rocket Name: {data.launch.rocket.rocket_name}</li>
                    <li className='list-group-item'>Rocket Type: {data.launch.rocket.rocket_type}</li>
                  </ul>
                </>
              }
            </>
          }
        </Query>
      </div>
    )
  }
}

export default Launch;

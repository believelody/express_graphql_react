import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const LaunchItem = ({ data: { flight_number, mission_name, launch_date_local, launch_success } }) => (
  <div className='card card-body mb-3'>
    <div className='row'>
      <div className='col-md-9'>
        <h4>
          Mission:
          <span className={classNames({
            'text-success': launch_success,
            'text-danger': !launch_success
          })}
          >
            {mission_name}
          </span>
        </h4>
        <p>Date: <Moment format="MMMM DD YYYY HH:mm">{launch_date_local}</Moment></p>
      </div>
      <div className='col-md-3'>
        <NavLink to={`/launch/${flight_number}`} className='btn btn-secondary'>More Details</NavLink>
      </div>
    </div>
  </div>
);

export default LaunchItem;

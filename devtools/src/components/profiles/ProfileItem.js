import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';


class ProfileItem extends Component {
    state = {  }
    render() {
        const {profile} = this.props; 
        console.log("p",profile.id);
        return ( 
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    {/* <img src={profile.handle} alt="" className="rounded-circle" /> */}
                     
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>
                        {profile.handle}
                    </h3>
                    <p>{profile.status}{isEmpty(profile.company)? null : (<span>at { profile.company} </span>)}</p>
                    <p>
                        {isEmpty(profile.location ? null: <span>{profile.location} </span>)}
                    </p>
                    <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                        View Profile
                    </Link>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <h4>Skill Set</h4>
                    <ul className="list-group">
                        {profile.skills.split(',').slice(0,4).map((skill,index) => (
                            <li key={index} className="list-group-item"><i className="fa fa-check pr-1" />
                            {skill} </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div> );
    }
}
 
ProfileItem.propTypes = {
    profile: PropTypes.object
}

export default ProfileItem;
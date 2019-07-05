import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';


class ProfileAbout extends Component {
    state = {  }
    render() { 
        const {profile} = this.props;

        // get first name
        const firstName = profile.handle.trim().split(' ')[0];

        // skills list
        const skills = profile.skills.split(',').map((skill, index) => 
        <div key={index} className="p-3">
           {skill ? (<div><i className="fa fa-check" /> {skill}</div>) : "" } 
                        
        </div>
        )

        return ( 
            <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
                <h3 className="text-center text-info">{firstName}'s Bio</h3>
                <span className="lead"> {isEmpty(profile.bio) ? (<span>{firstName} does not have a bio.</span>) : (<p>{profile.bio}</p>)}
                </span>
                <hr />
                <h3 className="text-center text-info">Skill Set</h3>
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                        {skills}
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 
ProfileAbout.propTypes = {
  profile: PropTypes.object
}

export default ProfileAbout;
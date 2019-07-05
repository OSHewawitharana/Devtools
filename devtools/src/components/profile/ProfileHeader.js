import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
    state = {  }
    render() { 
        const  {profile} = this.props;
        console.log(profile);
        return ( 
            <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-info text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="display-4 text-center">{profile.handle}</h1>
                  <p className="lead text-center">{profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}</p>
                  {isEmpty(profile.location) ? null : (<p>{profile.location}</p>)}
                  <p>
                  {isEmpty(profile.website) ? null : 
                    <a className="text-white p-2" href={profile.website} target="_blank">
                      <i className="fas fa-globe fa-2x"></i>
                    </a>
                  }
                  {isEmpty(profile.twitter) ? null : 
                    <a className="text-white p-2" href={profile.twitter} target="_blank">
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                  }
                  {isEmpty(profile.facebook) ? null : 
                    <a className="text-white p-2" href={profile.facebook} target="_blank">
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                  }
                  
                  {isEmpty(profile.linkedin) ? null : 
                    <a className="text-white p-2" href={profile.linkedin} target="_blank">
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  }
                  
                  {isEmpty(profile.instagram) ? null : 
                    <a className="text-white p-2" href={profile.instagram} target="_blank">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  }

                  {isEmpty(profile.youtube) ? null : 
                    <a className="text-white p-2" href={profile.youtube} target="_blank">
                      <i className="fab fa-youtube fa-2x"></i>
                    </a>
                  }
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 
export default ProfileHeader;
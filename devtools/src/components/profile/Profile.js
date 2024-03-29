import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import {getProfileByHandle} from '../../actions/profileActions';

class Profile extends Component {
    state = {  }

    componentDidMount() {
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle); 
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("paa",this.props);
        if ((nextProps.profile.profile === null) && this.props.profile.loading) {
            this.props.history.push('/not-found');
        }
    }
    

    render() { 

        const {profile, loading } = this.props.profile;
        let profileContent;

        if (profile==null || loading) {
            profileContent = <Spinner />
        } else {
            profileContent = (
                <div>
                    <div className="row" >
                        <Link to="/profiles" className="btn btn-light mb-3 float-left">
                            Back To Profiles    
                        </Link>
                    </div>
                    <div className="col-md-6" />
                    <ProfileHeader profile={profile} />
                    <ProfileAbout profile={profile} />
                    <ProfileCreds education={profile.educations} experience={profile.experiences} />
                    {profile.githubusername ? (<ProfileGithub username={profile.githubusername} />) : null}
                </div>
            )
        }

        return ( 
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {profileContent}
                        </div>
                    </div>
                </div> 
            </div>
         );
    }
}

Profile.propTypes = {
    profile: PropTypes.object
}

const mapStateToProps = state => ({
    profile: state.profile
})
 
export default connect(mapStateToProps, { getProfileByHandle })(Profile);
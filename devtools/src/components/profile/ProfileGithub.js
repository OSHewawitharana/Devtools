import React, { Component } from 'react';
// import {Link, Linkto} from 'react-router-dom';
import PropTypes from 'prop-types';


class ProfileGithub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: 'ea6e0531477171b28fb1 ',
            clientSecret: '0e65713cb02805d59ef0297f7adb41a344a16496',
            count: 5,
            sort: 'created: asc',
            repos: []
        }
    }

    componentDidMount(){
        const { username } = this.props; 
        const { count, sort, clientId, clientSecret } = this.state;

        console.log("username", username);

        fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (this.refs.myRef) {
                this.setState({ repos: data });
              }
      
        })
        .catch(err => console.log(err));
    }

    render() { 
        const {repos} = this.state;
        console.log("repos",repos)
        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <a href={repo.html_url} className="text-info" target="_blank">
                                {repo.name}
                            </a>
                        </h4>
                        <p>{ repo.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">
                            Stars: { repo.stargazers_count }
                        </span>
                        <span className="badge badge-secondary mr-1">
                            Watchers: { repo.watchers_count }
                        </span>
                        <span className="badge badge-success mr-1">
                            Forks: { repo.forks_count }
                        </span>
                    </div>
                </div>
            </div>
        ))
        return ( 
            <div ref="myRef">
                <hr />
                <h3 className="mb-4">Latest Github Repos</h3>
                {repoItems}
            </div>
         );
    }
}

ProfileGithub.propTypes = {
    username: PropTypes.string  
}
 
export default ProfileGithub;
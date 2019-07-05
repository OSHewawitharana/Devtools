import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

class PostItem extends Component {
    
    onDeleteClick() {

    }

    render() { 
        const { post, auth } = this.props
        console.log(auth);
        return ( 
            <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <a href="profile.html">
                  <img className="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="" />
                </a>
                <br />
                <p className="text-center">{post.username}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{post.text}</p>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-info fas fa-thumbs-up"></i>
                  <span className="badge badge-light">4</span>
                </button>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-secondary fas fa-thumbs-down"></i>
                </button>
                <Link to={`/post/${post.id}`} className="btn btn-info mr-1">
                  Comments
                </Link>   
                {post.username ===  auth.user.username ? (
                    <button onClick={this.onDeleteClick.bind(this,post.id)} type="button" className="btn btn-danger mr-1"><i className="fas fa-times" /></button> 
                ) : null}    
              </div>
            </div>
          </div>
         );
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostItem);
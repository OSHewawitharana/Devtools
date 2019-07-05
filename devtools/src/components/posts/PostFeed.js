import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';


class PostFeed extends Component {
    state = {  }
    render() { 
        const {posts} = this.props;
        console.log("ppp",posts)

        return ( 
           posts.map(post => <PostItem key={post.id} post={post} />)
         );
    }
}

PostFeed.propTypes = {
    posts: PropTypes.object.isRequired
}

export default PostFeed;
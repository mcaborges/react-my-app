import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import './Posts.css';
import _ from 'lodash';

class Posts extends Component {
     constructor(props) {
        super(props);
        this.state = {
            posts: { 'asdrewerewr': {title: 'Title', body: 'body'}}
        };
    }
    renderPosts(){
        return _.map(this.state.posts, (post, key) => {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        });
    } 
    render () {
        return (
            <div> 
                <NavBar />
                <div>
                    {this.renderPosts()}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Posts;
import React, { Component } from 'react';
import './Post.css'
import Heart from './heart.svg';
import Comment from './comment.svg';
import Send from './send.svg';
import Bookmark from './bookmark.svg';
import Profile from './profile.jpg';
import Cat from './cat.jpg';
import Ellipsis from './ellipsis.svg';
class Post extends Component {
    render() {
        return <div className="Component-container">
            <header className="Post-header">
            <img src={Profile} className="Profile-img" alt="woman sitting"/>
            <div className="Profile-data">
                <p className="Username">username</p>
                <p className="Location">Wonderful Location</p>
            </div>
            <button className="Follow-button">Follow</button>
            <img src={Ellipsis} className="Ellipsis-img" alt="ellipsis"/>
            </header>
            <div className="Post-body">
                <img src={Cat} className="Cat-img" alt="cat reaching up"/>
                <h1>INSIDE SEA-MEOW CONVENTION, THE BIGGEST CAT CONVENTION IN THE PNW</h1>
            </div>
            <footer className="Post-footer">
                <img src={Heart} className="Icons Heart" alt="heart"/>
                <div className="Likes"></div>
                <img src={Comment} className="Icons Comment" alt="comment bubble"/>
                <div className="Comments"></div>
                <img src={Send} className="Icons Send" alt="send icon"/>
                <div className="Sends"></div>
                <img src={Bookmark} className="Bookmark-img" alt="bookmark icon"/>
            </footer>

        </div>
    }
}

export default Post;
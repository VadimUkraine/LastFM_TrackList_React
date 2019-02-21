import React, { Component } from 'react';
import './SingleTrack.css';
import {Link}  from 'react-router-dom';



class SingleTrack extends Component {

  render() {

  	const {
  		trackName,
      artist,
  		avatar,
  		artistUrl
  	} = this.props


    return (
	    <div className="track-wrap">
        <div className="name_artist_wrap">
  			  <span className="track_name">{trackName}</span>
          <Link to={`/${artist}`} className="artist_name">{artist}</Link>
        </div>
        <div className="avatar_url_wrap">
    			{avatar !== undefined ? <img className="artist_avatar"src={avatar} alt="avatar"/> : <span>NO IMAGE</span>}
    			<a href={artistUrl} className="link_author">artist page</a>
        </div>
	    </div>
    );
  }
}



export default SingleTrack;

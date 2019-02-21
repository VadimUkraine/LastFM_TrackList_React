import React, { Component } from 'react';
import './Main.css';


import { connect } from 'react-redux';
import * as actions from '../../store/actions/contentTracks';
import * as uuid from 'uuid/v4';
import SingleTrack from './subComponent/SingleTrack/SingleTrack';



class Main extends Component {

	componentDidMount() {
		this.props.getServerTracks();
	}


  render() {

  	const renderTracks = Object.values(this.props.trackList);

    return (
      <main className="main">      	
      	{renderTracks[0].length ? <h1 className="main_title">List of popular tracks</h1> : 
            <div className="preloader">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
           		</svg>
            </div>
        }        
   		{renderTracks[0].map((item)=>{
			return(
			<SingleTrack
				key={uuid()}
				trackName = {item.name}
				artist = {item.artist.name}
				avatar={item.image[1]["#text"]}
				artistUrl = {item.artist.url}
			/>
			)
		})}

      </main>
    );
  }
}


const mapStateToProps = (state) => ({
	trackList: state.tracker	
});

function mapDispatchToProps(dispatch) {
	return {
		getServerTracks: () => dispatch(actions.getAllTracks()),

	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);


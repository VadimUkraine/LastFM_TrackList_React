import React, { Component } from 'react';
import './ArtistInfo.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/contentAuthor';
import * as uuid from 'uuid/v4';


class ArtistInfo extends Component {

	componentDidMount() {		
		const name = this.props.match.params.name;
		this.props.getServerAuthor(name);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
 

  render() {

  	const editSummary = this.props.summary.split('<a', 1)

    return (    
		    <div className="author_wrap">
				<h2>{this.props.author}</h2>
				<img src={this.props.image} alt="avatar"/>
				<p className="tags_wrap">
					{this.props.tags.map((item)=>{
						return(
						<a 
							key={uuid()} 
							href={item.url}
							className="tag_link"
							>
							{item.name}
						</a>)
					})}	
				</p>
				<p className="summary">{editSummary[0]}</p>	
				{this.props.tags.length ? null : <div className="preloader">
	                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
	                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
	           		</svg>
	            </div>}
		    </div>
			
    );
  }
}


const mapStateToProps = (state) => ({
	author: state.info.author,
	image: state.info.image,
	summary: state.info.summary,
	tags: state.info.tags
});

function mapDispatchToProps(dispatch) {
	return {
		getServerAuthor: (name) => dispatch(actions.getInfoAuthor(name)),

	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArtistInfo);




import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import ArtistInfo from './components/ArtistInfo/ArtistInfo';



class App extends Component {
 
    render() {

    return (
        <Router >
			<Switch>
				<Route exact path="/" component={Main}></Route>	
				<Route path="/:name" component={ArtistInfo}></Route>
			</Switch>
		</Router>
    );
  }
}


export default App;



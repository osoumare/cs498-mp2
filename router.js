import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import 'semantic-ui-css/semantic.css';
import { 
  Grid,
  Button

} from 'semantic-ui-react'

import Welcome from "./components/welcome"
import  Movie from "./components/movie"
import Search from "./components/children/searchBar"
import Descending from "./components/descending"
import Names from "./compoents/name"

import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			filterText: '',
		}
	}

	filterVal(value){
		this.setState({
			filterText: value
		})
	}
	render() {
		return (
			<Router>
				<div>
					<Welcome />
					<div class="navbuttons">
						<Grid centered columns={2}>
							<Link to="/">
								<Button> Movie Home: Gallery View of All Movies </Button></Link>
							<Link to="/search"><Button> Search the list - Ascending Order of Popularity </Button></Link>
							<Link to="/search/descending"><Button> Search the List - Descending Order of Popularity</Button></Link>

						</Grid>
					</div>



					<Route exact path='/search'
					render={(props) => <Search {...props} filterText={this.state.filterText}
					filterVal={this.filterVal.bind(this)} />}
					/>

					<Route exact path='/' render={props =>
  						<Grid centered columns={4}>
    						<Movie />
							<Movie />
							<Movie />
							<Movie />
						</Grid>
					} />

			<Route exact path='/search/descending'
					render={(props) => <Descending {...props} filterText={this.state.filterText}
					filterVal={this.filterVal.bind(this)} />}
					/>
				</div>


			</Router>
	);
	}
}

export default App;

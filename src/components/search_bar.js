import React, {Component} from 'react'; // if you add {Component} then instead of extends React.Component you can just say Component


//need a class based component which is more powerful than a functional component

/*const SearchBar = () => {
return <input />;
};*/


//defining class component. It always needs a render method that returns jsx
class SearchBar extends Component {


	// constructor for initilizing variables
	constructor(props){

		super(props);

		//initilizing state in a class based component, functional components don't have state
		this.state = { term: ''};

	}


	render() {
		//return <input onChange = {this.onInputChange}/>; with function declaration
		//arrow function es6; no need to declare a function
		//setting the state with the value of the search box. ALWAYS use setState
		//all JS varables should be in curley braces
		return(
			<div className="search-bar">
				<input
					placeholder="Search"
					value= {this.state.term}
					onChange = {event => this.onInputChange(event.target.value)} />
				</div>
			);
		}


		onInputChange(term) {
			this.setState({term});
			this.props.onSearchTermChange(term);
		}



	}

	// in order to be able to use a component in other files it has to exported:

	export default SearchBar;

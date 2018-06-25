//import libraries
import React, {Component} from 'react'; // create and manage components
import ReactDOM from 'react-dom'; // manipulating DOM
import YTSearch from 'youtube-api-search';
//unlike the libraries, the new files added to the project need file reference
import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

//always one component per file
// the most parent component should be responsible for fetching data
//api key
const API_KEY ='AIzaSyCgdvATvVvE-COcvchfKqwhnQ78_v58JDQ';



//create a component that produces HTML
//creating a class of components not an instance
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term:term }, (videos)=> {
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
		});
	}



	// passing data to child elemetns is called passing props
	render(){
		//throttling the video search callback function; 500 is mil is the lag
		const videoSearch= _.debounce((term) => {this.videoSearch(term)},500);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
					videos={this.state.videos}/>

			</div>
		);
	}
}



// Take the generated HTML and put it in the DOM
//<App /> is an instance of App class

ReactDOM.render(<App />, document.querySelector('.container'));

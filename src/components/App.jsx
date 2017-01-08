// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      searchString: 'input search here'
    };
  }

  onListItemClick(i) {
    this.setState({
      currentVideo: i
    });
  }

  componentDidMount() {
    this.onVideoSearch('react tutorials');
  }

  onVideoSearch(query) {
    this.props.searchYouTube({
      query: query,
      key: this.props.API_KEY,
      max: 5
    }, (videos) => this.setState ({
      videos: videos.items,
      currentVideo: videos.items[0]
    }));
  }

  onSearchClick(textInput) {
    this.setState({searchString: textInput});
    this.onVideoSearch(this.state.searchString);
    // console.log('this is the text' + this.state.searchString)
  }

  render() {
    return (
      <div>
        <Nav onSearchClick={(textInput) => this.onSearchClick(textInput)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onListItemClick={this.onListItemClick.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

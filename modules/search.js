import React from 'react';

const ELASTICSEARCH_URL = "https://shakestat-oregon-9345328632.us-west-2.bonsaisearch.net";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleInputChange(e) {
    this.setState({query: e.target.value});
  }

  onClick() {
    console.log(`search for ${this.state.query}`);
  }

  render(){
    return (
      <div className="_Search">
        <input type="text" name="query" value={this.state.q} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.onClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Search;

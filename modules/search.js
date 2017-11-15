import React from 'react';
import 'whatwg-fetch';

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

  basicQuery() {
    return {
      "query" : {
        "bool" : {
          "must" : [
            { "match" : { "title" : this.state.query } }
          ]
        }
      }
    }
  }

  onClick() {
    console.log(`search for ${this.state.query}`);
    let url = `${ELASTICSEARCH_URL}/_search`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.basicQuery())
    }).then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
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

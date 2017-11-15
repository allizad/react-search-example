import React from 'react';
import ResultComponent from './result-component';

class Results extends React.Component {
  renderResults() {
    let results = this.props.results;
    if (results.length > 0) {
      return results.map((result, i) => (
        <ResultComponent key={i} result={result}/>
      ))
    } else {
      return (<span>no results, amigo. Try again</span>)
    }
  }

  render(){
    return (
      <div className="_Results">
        {this.renderResults()}
      </div>
    )
  }
}

export default Results;

import React from 'react';

class ResultComponent extends React.Component {
  render(){
    let result = this.props.result["_source"];
    let score = this.props.result["_score"];
    return (
      <div className="_ResultComponent">
        {result.title} <small style={{color: "red"}}>{score}</small>
      </div>
    )
  }
}

export default ResultComponent;

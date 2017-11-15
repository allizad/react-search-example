import React from 'react';

class ResultComponent extends React.Component {
  render(){
    let result = this.props.result["_source"];
    return (
      <div className="_ResultComponent">
        {result.title}
      </div>
    )
  }
}

export default ResultComponent;

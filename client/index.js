console.log('some stuff is here.')

import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../modules/search';

class App extends React.Component {
  render(){
    return (
      <div className="_App">
        <Search/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

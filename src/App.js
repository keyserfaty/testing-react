import React, { Component } from 'react';

import Change from './change'
import List from './list'

class App extends Component {
  render() {
    return (
      <div>
        <Change/>

        <hr />

        <List/>
      </div>
    );
  }
}

export default App;

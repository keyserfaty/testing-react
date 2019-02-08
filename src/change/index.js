import React, { Component } from 'react';

class App extends Component {
  state = {
    item: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { item } = this.state

    return (
      <div>
        <input name="item" value={item} onChange={this.onChange} />
        Value: {item}
      </div>
    );
  }
}

export default App;

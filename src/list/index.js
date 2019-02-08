import React, { Component } from 'react';

class App extends Component {
  state = {
    item: '',
    list: []
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAdd = (item) => {
    const { list } = this.state
    
    this.setState({
      list: [
        ...list,
        item
      ]
    })
  }

  onRemove = (item) => {
    const { list } = this.state
    this.setState({
      list: list.filter(_item => item !== _item)
    })
  }

  render() {
    const { list, item } = this.state

    return (
      <div>
        <input name="item" value={item} onChange={this.onChange} />
        <button className="add" onClick={() => this.onAdd(item)}>+ Add</button>

        <div className="list">
          List: {list.map((item, key) => (
            <div key={key}>
              <div>{item}</div>
              <button className="remove" onClick={() => this.onRemove(item)}>- Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

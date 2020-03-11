

import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newItem: '',
      list: []
    }
  }

  updateInput(key, value){
    this.setState({
      [key]:value
    })
  }
  addItem() {
      //create item with unique id
      const newItem = {
         id: 1 +  Math.random(),
         value: this.state.newItem.slice()
      };
      //copy of cureent list items
      const list = [...this.state.list]
      //add new item to list
        list.push(newItem);

        this.setState({
          list,
          newItem:''
        })
      }
    deleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id!==id);
        this.setState({
          list: updatedList
        });
    }

  render() {
    return (
      <div>
        <h1>Todo-List</h1>
        <h2>Add an Item</h2>
        <input 
          type="text"
          placeholder="Type item here.." 
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button 
            type="primary"
            onClick={() => this.addItem()}
          >
            Add
          </button> 
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() =>this.deleteItem(item.id)}>
                    X
                  </button>
                </li>
              )
            })}
          </ul>

      </div>
    )
  }
}


export default App;

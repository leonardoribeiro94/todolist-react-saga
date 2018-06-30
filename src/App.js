import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store"
import './App.css';
import TodoList from "./components/TodoList";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList></TodoList>
        </div>
      </Provider>
    );
  }
}

export default App;

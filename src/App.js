import React, { Component } from 'react';
import './App.css';
//import DevTools from 'mobx-react-devtools';
import Market from './Components/Market';
import { observer } from 'mobx-react'


@observer
class App extends Component {


  render() {

    return (
      <div className="App">
        {/* <DevTools /> */}
        <Market />
      </div>
    );
  }
}
export default App;

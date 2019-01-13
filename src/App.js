import React, { Component } from 'react';
//import styled from 'styled-components';

import './App.css';

import Poster from './components/Poster/Poster';
import Menu from "./components/Menu/Menu";
import Todo from "./components/Todo/Todo";


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Poster/>
                <Menu/>
                <Todo/>
            </div>
        );
    }
}
export default App;



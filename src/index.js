// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function(){
    return <div>HELLO WORLD !!</div>
}

// Take the react component and show it onscreen 
ReactDOM.render(<App/>, document.querySelector('#root'));
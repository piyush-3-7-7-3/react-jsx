// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function buttonText(){
    return "Click On Me"
}

// Create a react component
const App = function () {

    return (
    <div>
        <label className='label' for="name">Enter Your Name</label>
        <input id="name" type='text'></input>
        <button style={{backgroundColor:"blue", color:"white"}}>{buttonText()}</button>
    </div>
    )

}

// Take the react component and show it onscreen 
ReactDOM.render(<App />, document.querySelector('#root'));
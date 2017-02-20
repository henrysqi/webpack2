import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Master from './../styles/master.scss';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                This is webpack!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
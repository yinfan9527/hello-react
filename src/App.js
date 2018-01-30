import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
    render() {
        const user = {
            name : "qiq",
            hobbies : ["sports", "reading"]
        }
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-xs-1" >
                        <h1 > Hello！！！ </h1> 
                    </div> 
                </div>
                <div className = "row" >
                    <div className = "col-xs-1" >
                        <Home name="Hoho" age={12} user={user}>
                            <p>I'm child</p>
                        </Home>
                    </div> 
                </div>
                <div className = "row" >
                    <div className = "col-xs-1" >
                        <Header/>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

    constructor(){
        super();
        this.state = {
            homeLink:"Header Link !"
        }
    }

    onGreet(param){
        alert(param);
    }

    onChangeLinkName(newLinkName){
        this.setState({
            homeLink: newLinkName,
        })
    }

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
                        <Header homeLink={this.state.homeLink} />
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-1" >
                        <Home name="Hoho" age={12} 
                            user={user} 
                            greet={this.onGreet} 
                            changeLink={this.onChangeLinkName.bind(this)}
                            defaultValue={this.state.homeLink}
                            >
                            <p>I'm child</p>
                        </Home>
                    </div> 
                </div>
            </div>
        );
    }
}

export default App;
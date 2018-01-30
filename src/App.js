import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

    constructor(){
        super();
        this.state = {
            homeLink:"Header Link !",
            homeMounted:true,
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

    onChangeMountHome(){
        this.setState({
            homeMounted: !this.state.homeMounted,
        })
    }

    render() {
        const user = {
            name : "qiq",
            hobbies : ["sports", "reading"]
        }

        let homeComp = "";
        if(this.state.homeMounted){
            homeComp = (<Home name="Hoho" age={12} 
                user={user} 
                greet={this.onGreet} 
                changeLink={this.onChangeLinkName.bind(this)}
                defaultValue={this.state.homeLink}
                >
                <p>I'm child</p>
        </Home>);
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
                        {homeComp}
                    </div> 
                </div>
                <hr/>
                <button onClick={()=>{this.onChangeMountHome()}} className="btn btn-danger">Home (Un)Mount</button>
            </div>
        );
    }
}

export default App;
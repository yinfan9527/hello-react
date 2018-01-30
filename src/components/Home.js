import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        // this.age = this.props.age;
        this.state = {
            age : props.age,
            status : 0,
            homeLink : props.defaultValue,
        }
        setTimeout(() => {
            this.setState({
                status : 1,
            })
        }, 3000)
    };

    onAddAgeClick(){
        // this.age += 3;
        this.setState({
            age : this.state.age + 3
        })
        console.log(this);
    }

    handleGreet(){
        this.props.greet(this.state.age);
    }

    changeLick(){
        this.props.changeLink(this.state.homeLink);
    }

    onChangeValue(e){
        this.setState({
            homeLink: e.target.value
        });
    }

    render() {
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-xs-1 col-xs-offset-11" >
                        <div>
                            <h4>Hobbies</h4>
                            <ul>
                                {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                        <div>your name is {this.props.name}, your age is {this.state.age}</div>
                        <p>Status: {this.state.status}</p>
                        <div>
                            <button onClick={this.onAddAgeClick.bind(this)} className="btn btn-primary">Add My Age</button>
                            <button onClick={() => {this.onAddAgeClick()}} className="btn btn-primary">Add My Age</button>
                        </div>
                        <hr/>
                        <button onClick={() => {this.handleGreet()}} className="btn btn-success" >Greet</button>
                        <hr />
                        <input type="text" defaultValue={this.props.defaultValue} onChange={(e)=>{this.onChangeValue(e)}}></input>
                        <button onClick={() => {this.changeLick()}} className="btn btn-warning">Change Link</button>
                    </div> 
                </div> 
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
}
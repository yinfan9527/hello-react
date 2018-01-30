import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        // this.age = this.props.age;
        this.state = {
            age : props.age
        }
    };

    onAddAgeClick(){
        // this.age += 3;
        this.setState({
            age : this.state.age + 3
        })
        console.log(this);
    }

    render() {
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-xs-1 col-xs-offset-11" >
                        <div>your name is {this.props.name}, your age is {this.state.age}</div>
                        <div>
                            <h4>Hobbies</h4>
                            <ul>
                                {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                        <div>
                            <button onClick={this.onAddAgeClick.bind(this)} className="btn btn-primary">Add My Age</button>
                            <button onClick={() => {this.onAddAgeClick()}} className="btn btn-primary">Add My Age</button>
                        </div>
                    </div> 
                </div> 
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
}
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        const name = this.props.name;
        
        return (
            
            <div>
                <h1>{this.props.title}</h1>
                <h1> This is my attempt at a React app </h1>
                <p> Not sure this will work </p>
            </div>
        )
    }
};
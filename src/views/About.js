  
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1> This is the about page. </h1>
                <p> I am trying to write a React app. Not going well. </p>
            </div>
        )
    }
};
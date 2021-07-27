import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Dog from './views/Dog';
import axios from 'axios';


export default class App extends Component {
  constructor(){
    super();


    }
  }

  dogAPIcall = async (breed) => {
    let response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
    return response.data
  };
  
  dogAPIdata = async (event) => {
    event.preventDefault();
    let data = await this.dogAPIcall(event.target[0].value, event.target[1].value);
    data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(data);

    // let's take that data and actually organize it and put it in our html
    // i started with my classic api principle of "if I can do it for one, I can do it for many"
    let ds = [];
    for(let i = 0; i<data.length; i++){

        }; // organizes the data for a single racer
        console.log(driver);
        ds.push(driver);
    }
    this.setState({drivers: ds})

    event.target.reset(); // reset form data so we can resubmit


  render();{
    console.log(this.state.drivers);
      return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home title={'Homework | Home'} name={this.state.breed}/>}/>
            <Route path='/about' render={() => <About title={'Homework | About'} name={this.state.breed}/>}/>
            <Route path='/contact' render={() => <Contact title={'Homework | Contact'} />}/>
            <Route path='/dog' render={() => <dog dogAPIdata={this.dogAPIdata}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
};
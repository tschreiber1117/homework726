import './App.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Brewery from './views/Brewery';
import axios from 'axios';
import Shop from './views/Shop';
import Cart from './views/Cart';


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Sam Davitt',
      students: ['Todd', 'Marwa', 'Colby', 'Michael', 'Emily', 'Aaron'],
      drivers: [],
      cart: [],
      total: 0
    }
  }

  breweryAPIcall = async (state) => {
    let response = await axios.get(`https://api.openbrewerydb.org/breweries?${state}`);
    return response.data
  };
  
  breweryAPIdata = async (name) => {
    name.preventDefault();
    let data = await this.breweryAPIcall(name.target[0].value);
    data = [0].state
    console.log(data);

    // let's take that data and actually organize it and put it in our html
    // i started with my classic api principle of "if I can do it for one, I can do it for many"
    let ds = [];
    for(let i = 0; i<data.length; i++){
        let driver = {
          pos: data[i].position,
          num: data[i].Driver.permanentNumber,
          code: data[i].Driver.code,
          name: `${data[i].Driver.givenName} ${data[i].Driver.familyName}`,
          team: data[i].Constructors[0].name,
          points: data[i].points
        }; // organizes the data for a single racer
        console.log(driver);
        ds.push(driver);
    }
    this.setState({drivers: ds})

    name.target.reset(); // reset form data so we can resubmit
  }

  addToCart = (product) => {
    this.state.cart.push(product);
    this.setState({total: this.state.total+product.price});
    this.setState();
  }

  removeFromCart = (product) => {
    for(let i=0; i<this.state.cart.length; i++){
      if( this.state.cart[i].id === product.id){
        this.state.cart.splice(i,1);
        break;
      }
    }
    this.setState({total: this.state.total-product.price});
    this.setState();
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} total={this.state.total}/>
        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home title={'Foxes65 | Home'} newprop={'Hi Colby'} name={this.state.name} students={this.state.students}/>}/>
            <Route path='/about' render={() => <About title={'Foxes65 | About'} name={this.state.name}/>}/>
            <Route path='/contact' render={() => <Contact title={'Foxes65 | Contact'} />}/>
            <Route path='/brewery' render={() => <Brewery breweryAPIdata={this.breweryAPIdata} drivers={this.state.drivers}/>}/>
            <Route path='/shop' render={() => <Shop addToCart={this.addToCart}/>}/>
            {/* <Route path='/cart' render={() => <Cart cart={this.state.cart} total={this.state.total} removeFromCart={this.removeFromCart}/>}/> */}
          </Switch>
        </main>
      </div>
    )
  }
};
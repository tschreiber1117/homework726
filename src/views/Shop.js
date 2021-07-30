import React, {Component} from 'react';
import Product from '../components/Products';

export default class Shop extends Component{
    constructor(){
        super();

        /*
        My store's products will be stored in the Shop component's state as an array
        Each product will be an object with the following properties
        id
        name
        price
        description
        image
        */
        this.state = {
            products: [
                {id: 1, name: 'Lamborghini Veneno', price: 4500000, desc: "Only 14 built in the world, this is one of Lamborghini's most expensive cars", image: 'https://cdn.motor1.com/images/mgl/LE40j/s1/lamborghini-veneno.jpg'},
                {id: 2, name: 'SSC Tuatara', price: 3600000, desc: 'Fastest production car built', image: 'https://cdn.motor1.com/images/mgl/ow800/s1/ssc-tuatara-averages-282.9-mph-at-the-johnny-bohmer-proving-grounds.jpg'},
                {id: 3, name: 'Honda Civic', price: 2999, desc: 'Will still run at 200,000 miles+', image: 'https://file.kelleybluebookimages.com/kbb/base/house/1998/1998-Honda-Civic-FrontSide_HOCIVLXSED973_506x348.jpg?interpolation=high-quality&downsize=600:*'},
                {id: 4, name: 'Infiniti Q50', price: 54999, desc: 'Best dollar for value vehicle to own', image: 'https://cdn.motor1.com/images/mgl/zK826/s3/2018-infiniti-q50-red-sport-400-review.webp'}
            ]
        }
    }


    render() {
        return(
            <React.Fragment>
               <h1>Welcome to Todd's Used Car lot</h1>
               <div className='row'>
                   {this.state.products.map( product => <Product key={product.id} product={product} addToCart={this.props.addToCart}/>)}
               </div>
            </React.Fragment>
            

            
        )
    }

}
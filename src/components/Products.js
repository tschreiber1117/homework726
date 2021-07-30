import React, {Component} from 'react';


export default class product extends Component {

    render() {
        console.log(this.props.Product);
        let p = this.props.product;
        return (
            <div class="card" style={{width: 18+'rem', marginRight: 10+'px'}}>
                <img src={p.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <p class="card-text">{p.desc}</p>
                        <a href="hello" class="btn btn-primary">${p.price.toFixed(2)}</a>
                    </div>
            </div>
                )
    }
}
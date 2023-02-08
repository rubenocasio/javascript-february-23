import React, { Component } from "react";

class MenuItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            price: this.props.price
        }
    }

    render(){
        return(
            <div>
                <h1>Menu Items</h1>
                <h3>Name: {this.props.dishName}</h3>
                <h3>Price: {this.state.price}</h3>
                <h3>Children: {this.props.children}</h3>

                <button onClick={() => this.setState({price: this.state.price + 2 })}>Click me {this.props.dishName}</button>
            </div>
        )
    }
}


export default MenuItem;
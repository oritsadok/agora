import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject("inventory")

@observer

class Item extends Component {

    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    
    }

    editItem = () => {
        let editedPrice = Number(window.prompt("set price to:"))
       
        this.props.inventory.changePrice(this.props.item.name, editedPrice)
        
    }

    render() {
       let item = this.props.item
        return (
            <div>
                <ul>
                    <li><span onDoubleClick={this.editItem}>
                        {item.quantity}- {item.name} available at ${item.price} per item</span>
                        <button onClick={this.buyItem}>Buy</button></li>
                </ul>


            </div>
        )
    }
}
export default Item
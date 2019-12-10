import React, { Component } from 'react';
import { observer,inject } from 'mobx-react'
import Item from './Item'

@inject("inventory")

@observer
class Market extends Component {
    handleChange = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }
    addItem = (e) => {
        if (e.key === 'Enter') {
            if(!this.state || this.state.newItem===""){return}
         this.props.inventory.addItem(this.state.newItem)
            this.setState({
                newItem: e.target.value =""
            })
        }
    }
    render() {
        let store = this.props.inventory
       
        return (
            <div>
                <h2>You have {store.numItems} diffrent items in your store</h2>
                <input type="text"
                    onKeyDown={this.addItem}
                    onChange={this.handleChange} 
                    placeholder="Add Item" 
                    />
                            {
                    store.items.map((item) => <Item
                                    item={item}   />)
                            }
            </div>
        )
    }

}
                    



export default Market
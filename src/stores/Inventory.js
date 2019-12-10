import { observable, action, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {
    @observable items = [];

   

    @action addItem = (name, price = 0, quantity = 2) => {
        let exsistItem = this.items.find(i => i.name === name)
        exsistItem ? this.items.quantity += quantity : this.items.push(new Item(name, price, quantity))

    }
    @action buyItem = (name) => {

        let itemIndex = this.items.findIndex(i => i.name === name)
        this.items[itemIndex].quantity - 1 === 0 ?
            this.items.splice(itemIndex, 1) : this.items[itemIndex].quantity--
    }


    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
    @computed get numItems() {
        return this.items.length
    }

}

class Basket {
    constructor() {
        this.basket = [];
        this.basketSize = 5;
        this.menu = [
            {
                type: 'salmon and avocado',
                price: 3.99
            },
            {
                type: 'chicken mayo',
                price: 2.99
            },
            {
                type: 'nutella and sesame seeds',
                price: 3.99
            },
            {
                type: 'chorizo and soft cheese',
                price: 3.99
            },
            {
                type: 'halloumi, hummous and lettuce',
                price: 4.99
            },
            {
                type: 'ham and cheese',
                price: 2.99
            },
            {
                type: 'plain',
                price: 1.99
            },
            {
                type: 'onion',
                price: 1.99
            }
        ];
    };
    
    addItemToBasket(type, price) {
        if (this.basket.length < this.basketSize) {
            const item = {
                id: this.basket.length + 1,
                type: type,
                price: price
            }
            this.basket.push(item);
        }
        return 'You cannot add more than 5 items to your basket!'
    };

    removeItemFromBasket(id) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id === id) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

    getItemPrice(product) {
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type === product) {
                return `The price of the item is £${this.menu[i].price}`
            }
        }
        return 'The product is not available'
    }

    showBasket() {
        return this.basket
    }

    getBasketTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.basket.length; i++) {
            totalPrice += this.basket[i].price
        }
        return `The total price of the items in your basket is £${totalPrice}`
    }
};

module.exports = Basket;

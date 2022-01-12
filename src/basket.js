class Basket {
    constructor() {
        this.basket = [];
        this.itemCounter = 0;
    };
    
    addItemToBasket(quantity, type, price) {
        const bagel = {
            id: this.basket.length + 1,
            type: type,
            price: price
        }
        this.basket.push(bagel);
        return this.basket
    };

    removeItemFromBasket(id) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].id === id) {
                this.basket.splice(i, 1)
            }
        }
        return this.basket
    }
};

module.exports = Basket;

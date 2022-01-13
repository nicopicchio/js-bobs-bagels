const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });

  it("create and add a item to the basket", () => {
    const expected = [{
        id: 1,
        type: 'salmon and avocado',
        price: 3.99
      }]
    basket.addItemToBasket('salmon and avocado', 3.99)  
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can add more than one item to the basket", () => {
    const expected = [
      {
        id: 1,
        type: 'salmon and avocado',
        price: 3.99,
      },
      {
        id: 2,
        type: 'chicken mayo',
        price: 2.99,
      }
    ]
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo',  2.99)
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can remove one item from the basket", () => {
    const expected = [
      {
        id: 1,
        type: 'salmon and avocado',
        price: 3.99,
      }
    ]
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.removeItemFromBasket(2)
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can remove more than one item from the basket", () => {
    const expected = [
      {
        id: 1,
        type: 'salmon and avocado',
        price: 3.99,
      },
      {
        id: 2,
        type: 'chicken mayo',
        price: 2.99,
      },
      {
        id: 3,
        type: 'nutella and sesame seeds',
        price: 3.99,
      },
      {
        id: 5,
        type: 'chorizo and soft cheese',
        price: 3.99,
      }
    ]
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('nutella and sesame seeds', 3.99)
    basket.addItemToBasket('ham and cheese', 2.99)
    basket.addItemToBasket('chorizo and soft cheese', 3.99)
    basket.addItemToBasket('halloumi, hummous and lettuce', 4.99)
    basket.removeItemFromBasket(4)
    basket.removeItemFromBasket(6)
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user cannot add more than 5 items to their basket", () => {
    const expected = 'You cannot add more than 5 items to your basket!'
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('nutella and sesame seeds', 3.99)
    basket.addItemToBasket('ham and cheese', 2.99)
    basket.addItemToBasket('chorizo and soft cheese', 3.99)
    basket.addItemToBasket('halloumi, hummous and lettuce', 4.99)
    const result = basket.addItemToBasket('salmon and avocado', 3.99)
    expect(result).toEqual(expected);
  });

  it("if the user tries to add more than 5 items, the basket will be full, the overfill will be discarded and an error message will be displayed", () => {
    const expected = [
      {
        id: 1,
        type: 'salmon and avocado',
        price: 3.99,
      },
      {
        id: 2,
        type: 'chicken mayo',
        price: 2.99,
      },
      {
        id: 3,
        type: 'nutella and sesame seeds',
        price: 3.99,
      },
      {
        id: 4,
        type: 'chorizo and soft cheese',
        price: 3.99,
      },
      {
        id: 5,
        type: 'halloumi, hummous and lettuce',
        price: 4.99,
      }
    ]
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('nutella and sesame seeds', 3.99)
    basket.addItemToBasket('chorizo and soft cheese', 3.99)
    basket.addItemToBasket('halloumi, hummous and lettuce', 4.99)
    basket.addItemToBasket('ham and cheese', 2.99)
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user cannot remove an item that does not exist from the basket", () => {
    const expected = 'The item does not exist in your basket!'
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('chorizo and soft cheese', 3.99)
    const result = basket.removeItemFromBasket(4)
    expect(result).toEqual(expected);
  });

  it("Bob's bagel manager can create baskets with larger capacity", () => {
    const expected = [
      {
        id: 1,
        type: 'salmon and avocado',
        price: 3.99,
      },
      {
        id: 2,
        type: 'chicken mayo',
        price: 2.99,
      },
      {
        id: 3,
        type: 'nutella and sesame seeds',
        price: 3.99,
      },
      {
        id: 4,
        type: 'chorizo and soft cheese',
        price: 3.99,
      },
      {
        id: 5,
        type: 'halloumi, hummous and lettuce',
        price: 4.99,
      },
      {
        id: 6,
        type: 'ham and cheese',
        price: 2.99,
      },
      {
        id: 7,
        type: 'plain',
        price: 1.99,
      },
      {
        id: 8,
        type: 'onion',
        price: 1.99,
      }
    ]
    basket.basketSize = 10
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('nutella and sesame seeds', 3.99)
    basket.addItemToBasket('chorizo and soft cheese', 3.99)
    basket.addItemToBasket('halloumi, hummous and lettuce', 4.99)
    basket.addItemToBasket('ham and cheese', 2.99)
    basket.addItemToBasket('plain', 1.99)
    basket.addItemToBasket('onion', 1.99)
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can check item price before adding it to the basket", () => {
    const expected = 'The price of the item is £3.99'
    const result = basket.getItemPrice('salmon and avocado')
    expect(result).toEqual(expected);
  });

  it("a user knows the total price of the items in their basket", () => {
    const expected = 'The total price of the items in your basket is £10.97'
    basket.addItemToBasket('salmon and avocado', 3.99)
    basket.addItemToBasket('chicken mayo', 2.99)
    basket.addItemToBasket('nutella and sesame seeds', 3.99)
    const result = basket.getBasketTotal()
    expect(result).toEqual(expected);
  });
});

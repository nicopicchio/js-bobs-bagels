const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });

  it("create and add a bagel to the basket", () => {
    const expected = [{
        id: 1,

        type: 'salmon and avocado',
        price: 3.99
      }]
    const result = basket.addItemToBasket(1, 'salmon and avocado', 3.99)
    expect(result).toEqual(expected);
  });

  it("a user can add more than one bagel to the basket", () => {
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
    basket.addItemToBasket(1, 'salmon and avocado', 3.99)
    const result = basket.addItemToBasket(1, 'chicken mayo',  2.99)
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
    basket.addItemToBasket(1, 'salmon and avocado', 3.99)
    basket.addItemToBasket(1, 'chicken mayo', 2.99)
    const result = basket.removeItemFromBasket(2)
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
    basket.addItemToBasket(1, 'salmon and avocado', 3.99)
    basket.addItemToBasket(1, 'chicken mayo', 2.99)
    basket.addItemToBasket(1, 'nutella and sesame seeds', 3.99)
    basket.addItemToBasket(1, 'ham and cheese', 2.99)
    basket.addItemToBasket(1, 'chorizo and soft cheese', 3.99)
    basket.addItemToBasket(1, 'halloumi, chickpeas and lettuce', 4.99)
    basket.removeItemFromBasket(4)
    const result = basket.removeItemFromBasket(6)
    expect(result).toEqual(expected);
  });

  // it("a user cannot add more than 10 items to their basket", () => {
  //   const expected = [
  //     {
  //       id: 1,
  //       type: 'salmon and avocado',
  //       price: 3.99,
  //     }
  //   ]
  //   const result = basket.addItemToBasket(11, 'salmon and avocado', 3.99)
  //   expect(result).toEqual(expected);
  // });
  // basket.addItemToBasket(1, 'chicken mayo', 2.99)
  // basket.addItemToBasket(1, 'nutella and sesame seeds', 3.99)
  // basket.addItemToBasket(1, 'ham and cheese', 2.99)
  // basket.addItemToBasket(1, 'chorizo and soft cheese', 3.99)
  // basket.addItemToBasket(1, 'halloumi, chickpeas and lettuce', 4.99)
});

/*
Methods:
Part II
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.

Methods:
isBasketFull()


Part III
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket.
*/
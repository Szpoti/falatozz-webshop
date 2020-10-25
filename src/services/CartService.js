export default class CartService {
  constructor() {
    this.cart = { prods: [], sum: 0 };
  }

  getCart() {
    return this.cart;
  }

  addProduct = (product, price, id) => {
    let productIsInCart = false;

    this.cart.prods.map((prod) => {
      if (prod.name === product) {
        prod.quantity += 1;
        productIsInCart = true;
      }
    });

    if (!productIsInCart) {
      this.cart.prods.push({ name: product, quantity: 1, id: id });
    }
    this.cart.sum += parseInt(price);
    return this.cart;
  };

  addMoreProduct(name, price, id, quantity) {
    let productIsInCart = false;
    this.cart.prods.map((prod) => {
      if (prod.name === name) {
        prod.quantity += parseInt(quantity);
        productIsInCart = true;
      }
    });

    if (!productIsInCart) {
      this.cart.prods.push({
        name: name,
        price: price,
        id: id,
        quantity: parseInt(quantity),
      });
    }
    this.cart.sum += parseInt(quantity) * parseInt(price);
    return this.cart;
  }
}

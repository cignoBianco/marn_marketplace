const cart = {
  itemTotal() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart')).length
      }
    }
    return 0
  },
  addItem(item, cb) {
    let cart = []
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      console.log(item, ' and shop ', item.shopUuid)
      cart.push({
        product: item,
        quantity: 1,
        shop: item.shopUuid
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      cb()
    }
  },
  updateCart(itemIndex, count) {
    let cart = []
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      cart[itemIndex].count = count
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
  updateAllCart(cart) {
    console.log('newCart',cart)
    localStorage.setItem('cart', JSON.stringify(cart))

  },
  getCart() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        //console.log('gc', localStorage.getItem('cart'))
        return JSON.parse(localStorage.getItem('cart'))
      }
    }
    return []
  },
  removeItem(itemIndex) {
    let cart = []
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      cart.splice(itemIndex, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    return cart
  },
  emptyCart(cb) {
    if (typeof window !== "undefined") {
      localStorage.removeItem('cart')
      cb()
    }
  }
}

export default cart

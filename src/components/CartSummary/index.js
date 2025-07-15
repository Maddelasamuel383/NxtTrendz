// Write your code here

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachitem => {
        total += eachitem.price * eachitem.quantity
      })
      const {length} = cartList

      return (
        <div>
          <h1>Order Total:RS {total}</h1>
          <p>{length} items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

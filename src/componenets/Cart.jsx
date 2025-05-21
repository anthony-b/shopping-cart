import React from 'react'

export default function Cart({ cart, removeFromCart }) {
  const cartItems = Object.values(cart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.UnitPrice * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h3>Shopping Cart</h3>
      <h2>Items in Cart</h2>
      <ul>
        {cartItems.length === 0 && <li>No items in cart.</li>}
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.ProductName} (x{item.quantity}) - ${item.UnitPrice.toFixed(2)} each
            <button className="remove-cart" onClick={() => removeFromCart(item.id)} style={{marginLeft: '8px'}}>🗑️</button>
          </li>
        ))}
      </ul>
      <section>
        <h3>Total Price</h3>
        <p>£{total.toFixed(2)}</p>
        <button className="checkout" disabled={cartItems.length === 0}>Checkout</button>
      </section>
    </aside>
  )
}

import React from 'react'

export default function CatalogueItem({ product, addToCart }) {
  return (
    <article className="product">
      <h3>{product.ProductName}</h3>
      <p>Supplier: {product.Suppliers[0]?.CompanyName}</p>
      <p>Price: ${product.UnitPrice.toFixed(2)}</p>
      <p>In Stock: {product.UnitsInStock}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </article>
  )
}

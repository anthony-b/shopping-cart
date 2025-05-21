import React from 'react'

export default function CatalogueItem({ product, addToCart }) {
  return (
    <article className="product">
      <h3>{product.ProductName}</h3>
      <img className="product-image" src={product.img} alt={product.ProductName} />
      <p className="supplier-name"><h4>Supplier: {product.Suppliers[0]?.CompanyName}</h4></p>
      <p>Price: £{product.UnitPrice.toFixed(2)}</p>
      <p>In Stock: {product.UnitsInStock}</p>
      <button disabled={product.UnitsInStock < 1} className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
    </article>
  )
}

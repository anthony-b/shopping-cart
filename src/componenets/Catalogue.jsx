import React, { useEffect, useState } from 'react'
import CatalogueItem from './CatalogueItem'

export default function Catalogue({ addToCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [])

  return (
    <main className="catalogue">
        <h2>Product Catalogue</h2> 
        <section className="products">
            {products.map((product) => (
                    <CatalogueItem
                        key={product.id}
                        name={product.name}
                        img={product.img}
                        description={product.description}
                        price={product.price}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}

          </section>
      </main>
  )
}

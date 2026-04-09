import React from 'react'
import Card from '../Card/Card'
import './Shop.scss'

const Shop = () => {

  const products = [
    { id: 1, name: 'Gold Bar' },
    { id: 2, name: 'Silver Bar' },
    { id: 3, name: 'Diamond' },
    { id: 4, name: 'Platinum' },
    { id: 5, name: 'Gold Bar' },
    { id: 6, name: 'Silver Bar' },
    { id: 7, name: 'Diamond' },
    { id: 8, name: 'Platinum' },
    { id: 9, name: 'Gold Bar' },
    { id: 10, name: 'Silver Bar' },
  ];

  const images = [
    'https://cdn.shopify.com/s/files/1/0433/4728/0033/files/Eleganzia-pure_silver-Shopify_d52b4311-0651-4fe8-8d58-d737390457f1_480x480.jpg?v=1614050258',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDgops3j2D3sOLx4xaNe4MQLK6mQDuCJh2A&s',
    'https://cdna.artstation.com/p/assets/images/images/062/280/882/large/retratosanime-055.jpg?1682756565',
    'https://trabertgoldsmiths.com/cdn/shop/articles/what-is-a-karat-of-gold.jpg?v=1710525694',
  ];

  return (
    <div className='shop'>
        {products.map((item) => (
          <Card 
            key={item.id}
            product={item}
            images={images}
          />
        ))}
    </div>
  )
}

export default Shop

import './Card.scss'

function Card({ product, images }) {

  const randomImage = images[Math.floor(Math.random() * images.length)]

  const handleClick = () => {
    console.log(`ID: ${product.id}, Name: ${product.name}`)
  }

  return (
    <div className="card">
      <img src={randomImage} alt={product.name} />
      <h3>{product.name}</h3>
      <button className='buy' onClick={handleClick}>Buy Now</button>
    </div>
  )
}

export default Card

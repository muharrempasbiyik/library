import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./card.scss"

const ProductCard = (props) => {
    const {img, title, author} = props;

    const addToCart = () => { 
        alert("Added to cart")
     }
     

  return (
     
    <Card className='text-center'  >
    <Card.Body >
      
    <div className="image">
          <Card.Img
            className="img"
            src={`img/${img}`}
            alt="Card image"
            width={322}
            height={240}
            objectFit="cover"
          />
        </div>
      <Card.Title className='mt-4' display-flex >{title}</Card.Title>
      <Card.Text>
     {author}
      </Card.Text>
      <Button onClick={addToCart} variant="secondary" className='mt-3'>Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard
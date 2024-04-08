import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = (props) => {
    const {img, title, author} = props;

    const addToCart = () => { 
        alert("Added to cart")
     }
     

  return (
     
    <Card className='text-center'  >
    <Card.Body >
    <Card.Img variant="top" src={`img/${img}` } width={"300px"} height={"300px"} />
      <Card.Title className='mt-4'>{title}</Card.Title>
      <Card.Text>
     {author}
      </Card.Text>
      <Button onClick={addToCart} variant="info" className='mt-3'>Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard
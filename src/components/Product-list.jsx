import React from 'react'
import {  Button, Card, Col, Container, Row } from 'react-bootstrap'
import data from "./library.json"
import ProductCard from './Product-card'

const ProductList = () => {
  return (
    <Container className='my-4'>
      <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
      {data.map(item=> 
      <Col key={item.id} className='w-auto'>
       <ProductCard {...item}/>

        </Col>)}
      </Row>
    </Container>
  )
}

export default ProductList
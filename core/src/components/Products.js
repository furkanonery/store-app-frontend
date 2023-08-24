import React, { useState, useEffect } from 'react';
import api from '../api';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>


      {products.map(product => (
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt={product.name}
            src={product.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {product.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {product.price}
            </CardSubtitle>
            <CardText>
              {product.description}
            </CardText>
            <Button>
              Detail
            </Button>
          </CardBody>
        </Card>
      ))}


    </div>



  );
}

export default Products;
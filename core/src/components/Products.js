import React, { useState, useEffect } from 'react';
import api from '../api';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Products() {
  const [products, setProducts] = useState([]);
  const [productGroups, setProductGroups] = useState([]);

  useEffect(() => {
    api.get('/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Group products into sets of 4
    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 4) {
      groupedProducts.push(products.slice(i, i + 4));
    }
    setProductGroups(groupedProducts);
  }, [products]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h1>Products</h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {productGroups.map((group, index) => (
            <div key={index} style={{ flex: '1 1 25%', maxWidth: '25%' }}>
              {group.map(product => (
                <Card
                  key={product.id}
                  style={{
                    width: '100%'
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
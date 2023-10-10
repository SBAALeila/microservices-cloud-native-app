import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ history }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Effectuer un appel API pour récupérer la liste des produits depuis le microservice "Produit"
    axios.get('http://localhost:3000/api/produits')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleProductClick = (productId) => {
    // Rediriger vers la page des détails du produit en utilisant l'historique de navigation
    history.push(`/produits/${productId}`);
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      {products.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <p>Prix : {product.price} €</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

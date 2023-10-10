import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {
  const history = useHistory();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.productId;
    // Effectuer un appel API pour récupérer les informations du produit depuis le microservice "Produit"
    axios.get(`http://localhost:4000/api/product/${productId}`)
      .then(response => {
        setProduct({
          ...response.data,
          img: response.data.img
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.productId]);

  const handleOrderClick = () => {
    // Rediriger vers la page du formulaire
    history.push('/orders');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
    
      <span className="detail-image-container">
        <img src={product.img} alt={product.title} className="detail-image" />
      </span>
      <span className="detail-info">
        <div className="detail-description">{product.desc}</div>
        <div className="detail-price">Prix : {product.price} €</div>
        <button className="detail-button" onClick={handleOrderClick}>Commander</button>
      </span>
    </div>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
import { isEmpty } from './Utils';

// Importer les images
/*
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpeg';
*/

const HomePage = () => {
  /*
  const products = [
    {
      id: 1,
      name: 'Produit 1',
      image: image1,
      description: 'Description du produit 1',
      price: 19.99
    },
    {
      id: 2,
      name: 'Produit 2',
      image: image2,
      description: 'Description du produit 2',
      price: 19.99
    },
    {
      id: 3,
      name: 'Produit 3',
      image: image3,
      description: 'Description du produit 3',
      price: 19.99
    },
    {
      id: 4,
      name: 'Produit 4',
      image: image4,
      description: 'Description du produit 4',
      price: 19.99
    },
    // Ajoutez ici les autres produits avec leurs informations
    {
      id: 5,
      name: 'Produit 5',
      image: image5,
      description: 'Description du produit 5',
      price: 19.99
    },
    {
      id: 6,
      name: 'Produit 6',
      image: image6,
      description: 'Description du produit 6',
      price: 19.99
    },
    {
      id: 7,
      name: 'Produit 7',
      image: image7,
      description: 'Description du produit 7',
      price: 19.99
    },
    {
      id: 8,
      name: 'Produit 8',
      image: image8,
      description: 'Description du produit 8',
      price: 19.99
    },

  ];
  */

  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Effectuer un appel API pour récupérer les informations du produit depuis le microservice "Produit"
    axios.get('http://localhost:4000/api/product/')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Accueil</h1>
      <div className="product-grid">
        {products && !isEmpty(products[0]) && products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <p>Prix : {product.price} €</p>
            <Link to={`/produits/${product._id}`}>
              <button>Plus d'informations</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

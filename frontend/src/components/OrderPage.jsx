import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './OrderPage.css';

const OrderPage = () => {
  const history = useHistory();
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        const response = await axios.post('http://localhost:6000/orders');
        const { orderId } = response.data;
        setOrderId(orderId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderId();
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoToPayment = () => {
    history.push('/payment');
  };

  return (
    <div className="order-page">
      <div className="order-container">
        <h2 className="order-title">Confirmation de commande</h2>
        <p className="order-text">Votre commande a été prise avec succès !</p>
        <p className="order-id">Numéro de commande : {orderId}</p>
        <button className="order-button" onClick={handleGoBack}>Retour</button>
        <button className="order-button" onClick={handleGoToPayment}>Paiement</button>
      </div>
    </div>
  );
};

export default OrderPage;

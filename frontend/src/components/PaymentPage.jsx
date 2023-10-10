import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css'; // Importation du fichier CSS

const Payment = () => {
  const [status, setStatus] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/payment/status');
        const { status } = response.data;
        setStatus(status);
      } catch (error) {
        console.error(error);
        setStatus('failure');
      }
    };

    fetchPaymentStatus();
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className='payment-page'>
    <div className="payment-container"> {/* Ajout de la classe "payment-container" */}
      <h2 className="payment-title">Confirmation de paiement</h2>
      {status === 'success' ? (
        <p className="payment-text">Votre paiement a été accepté.<br /> Merci pour votre commande! <br />Nous espérons vous revoir bientôt</p>
        
      ) : (
        <p>Échec du paiement. Veuillez réessayer.</p>
      )}
      <button className="payment-button" onClick={handleGoBack}>Retour</button>
    </div></div>
  );
};

export default Payment;

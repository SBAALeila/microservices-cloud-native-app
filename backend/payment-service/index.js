const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/payment', (req, res) => {
  const { orderId } = req.body;

  // Ici, vous pouvez effectuer le traitement nécessaire pour le paiement
  // Vérification de l'identifiant de commande, traitement du paiement, etc.

  // Exemple de traitement de réussite du paiement
  const paymentStatus = 'success';

  // Si le traitement est réussi, vous pouvez renvoyer le statut de réussite
  res.json({ status: paymentStatus });
});

app.get('/payment/status', (req, res) => {
  const paymentStatus = 'success'; // Remplacez cette valeur par la logique réelle pour récupérer l'état du paiement
  res.json({ status: paymentStatus });
});

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome TO PAYMENT-SERVICE');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Microservice "payment-service" running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

let orders = {};

app.post('/orders', (req, res) => {
  const orderId = uuidv4();
  orders[orderId] = { status: 'pending' };
  res.json({ orderId });
});

app.get('/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = orders[orderId];

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

app.post('/payment/confirm', (req, res) => {
  const { orderId } = req.body;
  const order = orders[orderId];

  if (order) {
    order.status = 'paid';
    res.json({ status: 'success' });
  } else {
    res.status(404).json({ status: 'failure', error: 'Order not found' });
  }
});

// Welcome route
app.get('/', (req, res) => {
  res.send('WELCOME TO ORDER-SERVICE');
});

const port = 6000;
app.listen(port, () => {
  console.log(`Microservice "orderservice" running on port ${port}`);
});

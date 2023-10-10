import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import OrderPage from './components/OrderPage';
import Payment from './components/PaymentPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Application M-commerce</h1>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/produits/:productId" component={ProductDetails} />
          <Route path="/orders" component={OrderPage} />
          <Route path= "/payment" component={Payment}/>
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;

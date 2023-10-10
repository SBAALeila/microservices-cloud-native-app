const mongoose = require('mongoose');
const Product = require('./Product');

// URL de connexion à la base de données MongoDB
const url = 'mongodb+srv://sbaaleila:kata123@product-service.89hqoep.mongodb.net/?retryWrites=true&w=majority';


// Connexion à la base de données
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données établie avec succès.');

    // Modèle de la collection
    //const Model = mongoose.model('products', Product);

    // Données à insérer
    const documents = [
      {
        title: 'bracelet ',
        img: '/images/1.jpg',
        desc: 'Description du produit 1',
        price: 19.99
      },
      {
        title: 'gourmette ',
        img: '/images/2.jpg',
        desc: 'Description du produit 2',
        price: 19.99
      },
      {
        title: 'bague',
        img: '/images/3.jpg',
        desc: 'Description du produit 3',
        price: 19.99
      },
      {
        title: 'montre',
        img: '/images/4.jpg',
        desc: 'Description du produit 4',
        price: 19.99
      },
      {
        title: 'bracelet',
        img: '/images/5.jpg',
        desc: 'Description du produit 5',
        price: 19.99
      },
      {
        title: 'chaine',
        img: '/images/7.jpeg',
        desc: 'Description du produit 6',
        price: 19.99
      },
      {
        title: 'gourmette',
        img: '/images/7.jpg',
        desc: 'Description du produit 7',
        price: 19.99
      },
      {
        title: 'boucles',
        img: '/images/8.jpeg',
        desc: 'Description du produit 8',
        price: 19.99
      },
      
    ];

    // Insertion des documents
    Product.insertMany(documents, function(err, result) {
      if (err) {
        console.log('Erreur lors de l\'insertion des documents :', err);
      } else {
        console.log(result.length + ' documents ont été insérés dans la collection maCollection.');
      }

      // Fermeture de la connexion à la base de données
      mongoose.connection.close();
    });
  })
  .catch((err) => {
    console.log('Erreur lors de la connexion à la base de données :', err);
  });
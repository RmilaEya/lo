const express = require('express');
const app = express();
const port = 3000; // Ou un autre port de votre choix



const posts = [
    { id: 1, titre: 'Premier post', contenu: 'Contenu du premier post' },
    { id: 2, titre: 'Deuxième post', contenu: 'Contenu du deuxième post' },
    { id: 3, titre: 'Troixième post', contenu: 'Contenu du Troixième post' },
  ];

  app.get('/postList', (req, res) => {
    res.json(posts);
  });
// app.get('/postList', (req, res) => {
//   res.json(posts);
// });

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 3000; // Port pour le serveur

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Données simulées
// const posts = [
//   { id: '1', titre: 'Premier post', contenu: 'Détails premier post' },
//   { id: '2', titre: 'Deuxième post', contenu: 'Détails deuxième post' },
//   { id: '3', titre: 'Troisième post', contenu: 'Détails troisième post' },
// ];

// // Routes API
// app.get('/postList', (req, res) => {
//   res.json(posts);
// });

// // Lancer le serveur
// app.listen(PORT, () => {
//   console.log(`Serveur Node.js en cours d'exécution sur http://localhost:${PORT}`);
// });

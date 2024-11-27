const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');  // Importation de la fonction de connexion
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données
connectDB();

// Appel des routes 
const echangeRoutes = require('./routes/echange');
const typeRoutes = require('./routes/type');

app.use('/api/echanges', echangeRoutes);
app.use('/api/types', typeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Serveur lancé sur le port ${PORT}`); });

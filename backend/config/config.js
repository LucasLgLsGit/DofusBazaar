const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('MongoDB connecté');
    } catch (error) {
        console.error('Erreur de connexion MongoDB :', error.message);
        process.exit(1); // Arrêt du serveur en cas d'erreur
    }
};

module.exports = connectDB;

# DofusBazaar

## Description
DofusBazaar est un projet de gestion d'échanges, inspiré de l'univers du jeu Dofus, on peut créer des types, des échanges, les modifier et les supprimer. 
Il inclut un backend (Node.js avec MongoDB) et un frontend en React.

## Prérequis

Avant de commencer, assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

### Installation de Node.js et npm

1. Téléchargez et installez [Node.js](https://nodejs.org/) (npm est inclus avec Node.js).
2. Pour vérifier si vous avez déjà Node.js et npm installés, ouvrez un terminal et tapez :
   ```sh
   node -v
   npm -v

## Installation

### Cloner le dépôt

1. Ouvrez un terminal et naviguez jusqu'au dossier où vous souhaitez cloner le projet.
2. Clonez le dépôt avec la commande suivante :
   ```sh
   git clone https://github.com/LucasLgLsGit/DofusBazaar.git
3. Accédez au dossier du projet :

   ```sh
   cd DofusBazaar
   ```
### Installer les dépendances
Installez les dépendances pour le backend et le frontend en exécutant les commandes suivantes :
   ```sh
   cd backend
   npm install
   cd ../frontend
   ```

Configuration de l'environnement
Dans le dossier backend, créez un fichier .env à la racine et ajoutez les variables d'environnement nécessaires. Par exemple :
   ```sh
   #.env

   # URI de connexion à MongoDB (utilise le lien fourni par MongoDB Atlas ou ton cluster local)
   MONGO_URI=votre_uri_mongodb
   
   # Port de ton serveur backend (si tu veux personnaliser le port)
   PORT=5000
   ```
Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine, ou utilisez une instance distante.

### Lancer l'application
Revenez à la racine du projet :
   ```sh
   cd ..
   ```

Démarrez à la fois le backend et le frontend en utilisant concurrently :
   ```sh
   npm start
   ```

Cette commande lancera simultanément le serveur backend sur http://localhost:5000 et le frontend sur http://localhost:3000.

Ouvrez votre navigateur et accédez à http://localhost:3000 pour utiliser l'application.

### Structure du projet
backend/ : Contient le code du serveur Node.js avec Express et MongoDB.

frontend/ : Contient l'application React pour l'interface utilisateur.

package.json : Fichier de configuration principal pour les scripts et les dépendances.


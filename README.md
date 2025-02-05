# DofusBazaar

## Description
DofusBazaar est un projet de gestion d'échanges, inspiré de l'univers du jeu Dofus, on peut créer des types, des échanges, les modifier et les supprimer. 
J'ai réalisé ce projet dans le premier but de m'améliorer en JavaScript, et aussi dans le but de m'aider, car c'est avant tout un outil, je faisais énormément de commerce sur ce jeu 
et je n'arrivais pas à garder le fil car j'en faisais beaucoup, et je ne voulais pas entretenir un tableau Excell avec énormément de lignes, donc j'ai développé cet outil utile, pour moi avant tout, mais qui peut l'être pour d'autres aussi.
Il inclut un backend (Node.js avec MongoDB) et un frontend en React.

## Prérequis

Avant de commencer, assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

### Installation de Node.js et npm

1. Téléchargez et installez [Node.js](https://nodejs.org/) (npm est inclus avec Node.js).
2. Pour vérifier si vous avez déjà Node.js et npm installés, ouvrez un terminal et tapez :
   ```sh
   node -v
   npm -v
   ```
   
## Installation

### Cloner le dépôt

1. Ouvrez un terminal et naviguez jusqu'au dossier où vous souhaitez cloner le projet.
2. Clonez le dépôt avec la commande suivante :
   ```sh
   git clone https://github.com/LucasLgLsGit/DofusBazaar.git
   ```
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

### Petit tutoriel
![image](https://github.com/user-attachments/assets/8cef65e4-90e3-46cc-82d5-ece9cfec3e63)

Ci-dessus une capture d'écran en tant qu'exemple.
Le site est divisé en deux colonnes, celle de gauche pour les types, et celle de droite pour les échanges (qui ont eux même besoin des types).
On commence par créer un type (la liste se mettra à jour).
On peut maintenant créer un échange en remplissant les différents champs tel que le type, le prix d'achat et de revente.
Le tableau des échanges se mettra à jour avec vos informations et vous pourrez le supprimer ou bien le modifier

### Structure du projet
backend/ : Contient le code du serveur Node.js avec Express et MongoDB.

frontend/ : Contient l'application React pour l'interface utilisateur.

package.json : Fichier de configuration principal pour les scripts et les dépendances.

Développé par Lucas LANGLOIS en 2ème année de BUT Informatique à l'IUT du Havre

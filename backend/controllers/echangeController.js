// controllers/echangeController.js
const Echange = require('../models/Echange');
const Type = require('../models/Type');

// Créer un nouvel échange
exports.createEchange = async (req, res) => {
  const { num, type, prix_achat, prix_estime } = req.body;

  try {
    // Vérifier que le type existe en utilisant l'ID du type
    const typeExist = await Type.findById(type); // Chercher par l'ID
    if (!typeExist) {
      return res.status(400).json({ error: 'Type invalide ou non trouvé.' });
    }

    const echange = new Echange({
      num,
      type: typeExist.id, // Utiliser l'ID du type existant
      prix_achat,
      prix_estime
    });

    await echange.save();

    // Populate qui affiche le String plutôt que l'id généré par mongoose
    const echangePopulated = await Echange.findById(echange._id).populate('type');

    res.status(201).json({ message: 'Echange créé avec succès !', echange: echangePopulated });
  } catch (error) {
    console.error('Erreur création échange:', error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};

exports.modifyEchange = async (req, res) => {
  try {
    const echangeId = req.params.id; // On récupère l'ID de l'échange depuis l'URL
    const echangeObject = req.file 
      ? { ...JSON.parse(req.body.Echange) } 
      : { ...req.body };

    const updatedEchange = await Echange.findByIdAndUpdate(
      echangeId, 
      { ...echangeObject, _id: echangeId }, 
      { new: true } // Retourne l'objet mis à jour
    );

    if (!updatedEchange) {
      return res.status(404).json({ message: "Echange non trouvé" });
    }

    res.status(200).json({ message: "Echange modifié avec succès !" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur lors de la modification." });
  }
};

exports.deleteEchange = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID de l'échange depuis l'URL
    const deletedEchange = await Echange.findByIdAndDelete(id);

    if (!deletedEchange) {
      console.log(`Echange avec l'ID ${id} non trouvé.`);
      return res.status(404).json({ message: "Echange non trouvé" });
    }

    console.log(`Echange supprimé: ${id}`);
    res.status(200).json({ message: "Echange supprimé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'échange:", error); // Log l'erreur complète
    res.status(500).json({ error: "Erreur serveur lors de la suppression." });
  }
};

// Récupérer tous les échanges (optionnel)
exports.getEchanges = async (req, res) => {
  try {
    const echanges = await Echange.find().populate('type', 'name'); // Récupérer les types associés
    res.status(200).json(echanges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

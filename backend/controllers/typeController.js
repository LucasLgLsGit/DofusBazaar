// controllers/typeController.js
const Type = require('../models/Type');

// Créer un nouveau type
exports.createType = async (req, res) => {
  const { name } = req.body;

  try {
    // Vérifier si le type existe déjà
    const existingType = await Type.findOne({ name });
    if (existingType) {
      return res.status(400).json({ error: 'Ce type existe déjà.' });
    }

    const newType = new Type({ name });
    await newType.save();
    res.status(201).json({ message: 'Type créé avec succès !', type: newType });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteType = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID du type depuis l'URL
    const deletedType = await Type.findByIdAndDelete(id);

    if (!deletedType) {
      console.log(`Type avec l'ID ${id} non trouvé.`);
      return res.status(404).json({ message: "Type non trouvé" });
    }

    console.log(`Type supprimé: ${id}`);
    res.status(200).json({ message: "Type supprimé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la suppression du type:", error); // Log l'erreur complète
    res.status(500).json({ error: "Erreur serveur lors de la suppression." });
  }
};


// Récupérer tous les types
exports.getTypes = async (req, res) => {
  try {
    const types = await Type.find(); // Récupérer tous les types
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
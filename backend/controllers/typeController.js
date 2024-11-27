// controllers/typeController.js
const Type = require('../models/Type');

// Récupérer tous les types
exports.getTypes = async (req, res) => {
  try {
    const types = await Type.find(); // Récupérer tous les types
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

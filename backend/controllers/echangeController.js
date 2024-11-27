// controllers/echangeController.js
const Echange = require('../models/Echange');
const Type = require('../models/Type');

// Créer un nouvel échange
exports.createEchange = async (req, res) => {
  const { num, type, prix_achat, prix_estime } = req.body;

  try {
    // Vérifier que le type existe
    const typeExist = await Type.findOne({name: type});
    if (!typeExist) {
      return res.status(400).json({ error: 'Type invalide ou non trouvé.' });
    }

    const echange = new Echange({
      num,
      type: typeExist.id,
      prix_achat,
      prix_estime
    });

    await echange.save();

    // Populate qui affiche le String plutôt que l'id généré par mongoose
    const echangePopulated = await Echange.findById(echange._id).populate('type');

    res.status(201).json({ message: 'Echange créé avec succès !', echange });
  } catch (error) {
    console.error('Erreur création échange:', error);
    res.status(500).json({ error: 'Erreur serveur.' });
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

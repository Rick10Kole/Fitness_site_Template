const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

/**
 * CONFIGURATION MONGODB
 * Remplacez la chaîne ci-dessous par votre propre chaîne de connexion MongoDB Atlas
 * Exemple : "mongodb+srv://utilisateur:motdepasse@cluster.mongodb.net/fitzone"
 */
const MONGODB_URI = "mongodb+srv://ricardobankole530_db_user:UGvPRsOUiylY7Dem@cluster0.vpdh6oa.mongodb.net/?appName=Cluster0";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Connexion à MongoDB
if (MONGODB_URI !== "VOTRE_CHAINE_DE_CONNEXION_ICI") {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Connecté avec succès à MongoDB'))
        .catch(err => console.error('❌ Erreur de connexion MongoDB:', err));
} else {
    console.warn('⚠️ ATTENTION : La chaîne de connexion MongoDB n\'est pas encore configurée dans server.js');
}

// Modèle de données pour les avis (Schema)
const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    program: { type: String, default: 'Général' },
    date: { type: String, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

// ROUTES API

// 1. Récupérer tous les avis
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 }); // Les plus récents en premier
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des avis' });
    }
});

// 2. Ajouter un nouvel avis
app.post('/api/reviews', async (req, res) => {
    try {
        const { name, rating, comment, program, date } = req.body;

        if (!name || !rating || !comment) {
            return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires' });
        }

        const newReview = new Review({
            name,
            rating,
            comment,
            program,
            date
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        console.error('Erreur lors de l\'enregistrement:', err);
        res.status(500).json({ error: 'Erreur serveur lors de la sauvegarde de l\'avis' });
    }
});

// Lancement du serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`==========================================`);
    console.log(`SERVEUR FITZONE PRÊT POUR MONGODB`);
    console.log(`URL : http://localhost:${PORT}`);
    console.log(`==========================================`);
});

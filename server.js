require('dotenv').config(); // Charge les variables du fichier .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * CONFIGURATION MONGODB
 * La chaîne de connexion est maintenant lue depuis le fichier .env
 * pour éviter les fuites de sécurité (Public Leaked Secret).
 */
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Connexion à MongoDB
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Connecté avec succès à MongoDB'))
        .catch(err => console.error('❌ Erreur de connexion MongoDB:', err.message));
} else {
    console.error('❌ ERREUR CRITIQUE : MONGODB_URI n\'est pas défini dans le fichier .env');
    console.log('Veuillez créer un fichier .env et y ajouter : MONGODB_URI=votre_lien_mongodb');
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
        const reviews = await Review.find().sort({ createdAt: -1 });
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
    console.log(`SERVEUR FITZONE SÉCURISÉ LANCÉ`);
    console.log(`Port : ${PORT}`);
    console.log(`==========================================`);
});

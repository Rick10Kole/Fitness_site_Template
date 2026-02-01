require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Log des requêtes entrantes
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Connecté avec succès à MongoDB'))
        .catch(err => console.error('❌ ERREUR CONNEXION MONGO:', err.message));
} else {
    console.error('❌ ERREUR: MONGODB_URI manquante dans le fichier .env');
}

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    program: { type: String, default: 'Général' },
    date: { type: String, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
        console.error('Erreur GET /api/reviews:', err.message);
        res.status(500).json({ error: 'Erreur lors de la récupération', details: err.message });
    }
});

app.post('/api/reviews', async (req, res) => {
    console.log('Données reçues pour publication:', req.body);
    try {
        const { name, rating, comment, program, date } = req.body;

        if (!name || !rating || !comment) {
            console.log('Validation échouée: champs manquants');
            return res.status(400).json({ error: 'Champs obligatoires manquants' });
        }

        const newReview = new Review({ name, rating, comment, program, date });
        const savedReview = await newReview.save();
        
        console.log('✅ Avis enregistré avec succès dans MongoDB');
        res.status(201).json(savedReview);
    } catch (err) {
        console.error('❌ ERREUR LORS DE LA SAUVEGARDE:', err.message);
        res.status(500).json({ 
            error: 'Le serveur n\'a pas pu enregistrer l\'avis dans MongoDB.',
            details: err.message 
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur actif sur http://localhost:${PORT}`);
});

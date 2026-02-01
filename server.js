const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const REVIEWS_FILE = path.join(__dirname, 'reviews.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Fonction pour lire les avis
const getReviews = () => {
    try {
        if (!fs.existsSync(REVIEWS_FILE)) return [];
        const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error("Erreur de lecture:", err);
        return [];
    }
};

// Fonction pour sauvegarder les avis
const saveReviews = (reviews) => {
    try {
        fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error("Erreur d'écriture:", err);
        return false;
    }
};

// Route pour récupérer les avis
app.get('/api/reviews', (req, res) => {
    res.json(getReviews());
});

// Route pour ajouter un avis
app.post('/api/reviews', (req, res) => {
    const { name, rating, comment, program, date } = req.body;
    
    if (!name || !rating || !comment) {
        return res.status(400).json({ error: "Champs manquants" });
    }

    const reviews = getReviews();
    const newReview = {
        id: Date.now(),
        name,
        rating: parseInt(rating),
        comment,
        program: program || 'Général',
        date: date || new Date().toISOString().split('T')[0]
    };

    reviews.unshift(newReview); // Ajouter au début de la liste
    
    if (saveReviews(reviews)) {
        console.log(`✅ Nouvel avis de ${name} enregistré.`);
        res.status(201).json(newReview);
    } else {
        res.status(500).json({ error: "Erreur de sauvegarde sur le serveur" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`==========================================`);
    console.log(`SERVEUR FITZONE GYM LANCÉ`);
    console.log(`URL : http://localhost:${PORT}`);
    console.log(`Stockage : reviews.json`);
    console.log(`==========================================`);
});

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

// Fonction utilitaire pour lire les avis en toute sécurité
const readReviews = () => {
    try {
        if (!fs.existsSync(REVIEWS_FILE)) {
            return [];
        }
        const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error('Erreur de lecture du fichier:', err);
        return [];
    }
};

// Fonction utilitaire pour écrire les avis en toute sécurité
const writeReviews = (reviews) => {
    try {
        fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erreur d\'écriture du fichier:', err);
        return false;
    }
};

// Route pour récupérer tous les avis
app.get('/api/reviews', (req, res) => {
    const reviews = readReviews();
    res.json(reviews);
});

// Route pour ajouter un nouvel avis
app.post('/api/reviews', (req, res) => {
    console.log('Réception d\'un nouvel avis:', req.body);
    
    const { name, rating, comment, program, date } = req.body;

    // Validation simple
    if (!name || !rating || !comment) {
        return res.status(400).json({ error: 'Champs obligatoires manquants' });
    }

    const reviews = readReviews();
    const newReview = {
        id: Date.now(),
        name,
        rating: parseInt(rating),
        comment,
        program: program || 'Général',
        date: date || new Date().toISOString().split('T')[0]
    };

    reviews.unshift(newReview);
    
    if (writeReviews(reviews)) {
        console.log('Avis enregistré avec succès !');
        res.status(201).json(newReview);
    } else {
        console.error('Échec de l\'enregistrement de l\'avis.');
        res.status(500).json({ error: 'Erreur lors de la sauvegarde sur le serveur' });
    }
});

app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Serveur FitZone démarré avec succès !`);
    console.log(`Adresse : http://localhost:${PORT}`);
    console.log(`Fichier de stockage : ${REVIEWS_FILE}`);
    console.log(`==========================================`);
});

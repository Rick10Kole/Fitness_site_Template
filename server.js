const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const REVIEWS_FILE = path.join(__dirname, 'reviews.json');

// Configuration CORS très permissive pour éviter les blocages
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.static(__dirname));

// Middleware de log pour voir chaque requête entrante
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

const readReviews = () => {
    try {
        if (!fs.existsSync(REVIEWS_FILE)) {
            console.log("Fichier reviews.json inexistant, création...");
            fs.writeFileSync(REVIEWS_FILE, '[]', 'utf8');
            return [];
        }
        const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error('ERREUR LECTURE:', err.message);
        return [];
    }
};

const writeReviews = (reviews) => {
    try {
        fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('ERREUR ÉCRITURE:', err.message);
        return false;
    }
};

app.get('/api/reviews', (req, res) => {
    const reviews = readReviews();
    res.json(reviews);
});

app.post('/api/reviews', (req, res) => {
    try {
        const { name, rating, comment, program, date } = req.body;

        if (!name || !rating || !comment) {
            console.log("Validation échouée: champs manquants");
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
            console.log(`Succès: Avis de ${name} enregistré.`);
            res.status(201).json(newReview);
        } else {
            res.status(500).json({ error: 'Impossible d\'écrire sur le disque' });
        }
    } catch (err) {
        console.error('ERREUR CRITIQUE POST:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`==========================================`);
    console.log(`SERVEUR FITZONE OPÉRATIONNEL`);
    console.log(`URL locale : http://localhost:${PORT}`);
    console.log(`==========================================`);
});

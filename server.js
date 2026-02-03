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
app.use(express.static(__dirname)); // Sert les fichiers statiques (html, css, js)

// Route pour récupérer tous les avis
app.get('/api/reviews', (req, res) => {
    fs.readFile(REVIEWS_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture des avis' });
        }
        res.json(JSON.parse(data));
    });
});

// Route pour ajouter un nouvel avis
app.post('/api/reviews', (req, res) => {
    const newReview = req.body;
    
    fs.readFile(REVIEWS_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture des avis' });
        }
        
        const reviews = JSON.parse(data);
        newReview.id = Date.now(); // ID unique basé sur le temps
        reviews.unshift(newReview); // Ajouter au début
        
        fs.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 4), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erreur lors de la sauvegarde de l\'avis' });
            }
            res.status(201).json(newReview);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

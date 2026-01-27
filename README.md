# FitZone Gym - Site Web Standalone

Site web standalone et fonctionnel pour FitZone Gym, converti depuis une application React. Ce site peut être ouvert directement dans un navigateur sans serveur ni dépendances.

## 📁 Structure des fichiers

```
FitZone_Standalone/
├── index.html              # Page d'accueil (hero, stats, features, tips, gallery, CTA)
├── about.html              # Page À propos (histoire, philosophie, équipe)
├── programs.html           # Page Programmes (grille de programmes avec détails)
├── contact.html            # Page Contact (formulaire de réservation, carte)
├── testimonials.html       # Page Témoignages (avis clients, formulaire)
├── css/
│   └── styles.css          # Feuille de style principale avec variables CSS
├── js/
│   ├── main.js             # JavaScript principal (navigation, mobile menu)
│   ├── data.js             # Données mock (format export, non utilisé directement)
│   └── icons.js            # Helper pour icônes SVG (non utilisé directement)
├── images/
│   └── logo-placeholder.svg # Placeholder pour votre logo
└── README.md               # Ce fichier
```

## 🚀 Utilisation

### Méthode 1 : Ouvrir directement dans le navigateur

1. Naviguez vers le dossier `FitZone_Standalone`
2. Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur par défaut

### Méthode 2 : Serveur local simple (recommandé)

#### Avec Python 3 :
```bash
cd FitZone_Standalone
python -m http.server 8000
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.

#### Avec Node.js (http-server) :
```bash
cd FitZone_Standalone
npx http-server -p 8000
```

#### Avec PHP :
```bash
cd FitZone_Standalone
php -S localhost:8000
```

## 🎨 Personnalisation des couleurs

Toutes les couleurs principales sont configurables via des variables CSS dans le fichier `css/styles.css`.

### Modifier les couleurs

Ouvrez `css/styles.css` et modifiez les variables dans la section `:root` :

```css
:root {
  /* Background Colors */
  --bg-page: #FAFFEE;
  --bg-card: #FAFAFF;
  --bg-subtle: #EDEDFE;
  --bg-section: #CACAFC;
  
  /* Text Colors */
  --text-primary: #004534;
  --text-secondary: #0C6951;
  --text-light: #807979;
  
  /* Border Colors */
  --border-light: #CACAFC;
  --border-medium: #DDDDDD;
  --border-strong: #B0B0B0;
  
  /* Brand Colors */
  --brand-primary: #D3FF62;  /* Couleur principale (boutons, highlights) */
  --brand-dark: #004534;      /* Couleur sombre (header, footer) */
  --brand-hover: #0C6951;     /* Couleur au survol */
}
```

**Exemple :** Pour changer la couleur principale en bleu :
```css
--brand-primary: #4A90E2;
--brand-dark: #2C3E50;
--brand-hover: #3498DB;
```

## 🖼️ Ajouter votre logo

1. Remplacez `images/logo-placeholder.svg` par votre logo
2. Formats acceptés : SVG, PNG, JPG
3. Taille recommandée : 32x32px à 128x128px (SVG est préférable pour la qualité)
4. Si votre logo est dans un autre format (PNG/JPG), modifiez l'extension dans les fichiers HTML :

```html
<!-- Remplacer -->
<img src="images/logo-placeholder.svg" alt="FitZone Gym Logo">

<!-- Par -->
<img src="images/votre-logo.png" alt="FitZone Gym Logo">
```

## 📝 Fonctionnalités

### ✅ Fonctionnalités incluses :

- **Navigation** : Menu responsive avec mobile menu
- **Galerie** : Galerie d'images avec modal (support YouTube/Vimeo)
- **Formulaires** :
  - Formulaire de réservation (contact.html) - affiche un message de confirmation
  - Formulaire de témoignages (testimonials.html) - affiche un message de confirmation
- **Programmes** : Grille de programmes avec détails complets
- **Témoignages** : Affichage des avis clients (données mock)
- **Responsive** : Design adaptatif pour mobile, tablette et desktop

### ⚠️ Limitations (version standalone) :

- **Pas de backend** : Les formulaires n'envoient pas réellement les données. Ils affichent un message de confirmation.
- **Données statiques** : Les témoignages sont stockés dans le HTML (peuvent être modifiés dans `testimonials.html`)
- **Pas de base de données** : Toutes les données sont dans le HTML/JavaScript

## 🔧 Personnalisation du contenu

### Modifier les informations de contact

Modifiez directement dans chaque fichier HTML la section footer :

```html
<span>123 Avenue des Sports, 75015 Paris, France</span>
<span>+33 6 12 34 56 78</span>
<span>contact@fitzonegym.com</span>
```

### Modifier les réseaux sociaux

Dans chaque fichier HTML, section footer :

```html
<a href="https://facebook.com/fitzonegym" ...>Facebook</a>
<a href="https://instagram.com/fitzonegym" ...>Instagram</a>
<a href="https://youtube.com/@fitzonegym" ...>YouTube</a>
```

### Modifier les programmes

Éditez le script JavaScript dans `programs.html` :

```javascript
const programsData = [
    {
        id: 1,
        name: "Nom du programme",
        description: "Description...",
        // ... autres propriétés
    }
];
```

### Modifier les témoignages

Éditez le script JavaScript dans `testimonials.html` :

```javascript
const testimonialsData = [
    {
        id: 1,
        name: "Nom Client",
        rating: 5,
        comment: "Commentaire...",
        // ... autres propriétés
    }
];
```

## 🌐 Compatibilité

- ✅ Chrome / Edge (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Opéra (dernière version)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 📦 Packaging pour déploiement

Pour créer un ZIP du site :

1. Sélectionnez tous les fichiers du dossier `FitZone_Standalone`
2. Créez une archive ZIP
3. Décompressez sur votre serveur web

**Note :** Le site fonctionne aussi en local sans serveur, mais certains navigateurs peuvent bloquer certaines fonctionnalités (comme les requêtes fetch) pour des raisons de sécurité.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que tous les fichiers sont présents
2. Vérifiez que les chemins relatifs sont corrects
3. Ouvrez la console du navigateur (F12) pour voir les erreurs éventuelles
4. Assurez-vous d'utiliser un navigateur moderne (dernière version)

## 📄 Licence

Ce site est basé sur le projet original de FitZone Gym. Adaptez selon vos besoins.

---

**Bon déploiement ! 🚀**
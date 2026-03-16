# JNJ Atakpamé 2026 🕊️

![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black?style=for-the-badge&logo=framer)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3)

> **Plateforme web officielle pour les Journées Nationales de la Jeunesse (JNJ) Catholique du Togo - Édition Atakpamé 2026.**

Ce site est une _Landing Page_ moderne, dynamique et fluide conçue pour présenter l'événement, fournir les informations pratiques aux jeunes pèlerins, et faciliter le processus de pré-inscription pour les différents diocèses du Togo.

---

## 📋 Table des matières

1. [Aperçu des Fonctionnalités](#-aperçu-des-fonctionnalités)
2. [Technologies Utilisées](#-technologies-utilisées)
3. [Architecture du Projet](#-architecture-du-projet)
4. [Installation & Lancement](#-installation--lancement)
5. [Scripts Disponibles](#-scripts-disponibles)
6. [Contribution](#-contribution)
7. [Licence](#-licence)

---

## ✨ Aperçu des Fonctionnalités

Le site est composé de plusieurs rubriques interactives :
- **Accueil (Hero)** : Présentation percutante de l'événement.
- **Pourquoi les JNJ** : Les grands objectifs et valeurs du rassemblement.
- **Mot des pères Évêques** : Message de la Conférence des Évêques du Togo.
- **Le Programme** : Une timeline interactive pour découvrir le déroulement jour par jour.
- **Inscription** : Formulaire accessible pour la pré-inscription des jeunes.
- **Guide du Pèlerin** : FAQ dynamique avec des informations logistiques (hébergement, restauration, etc.).
- **Carte d'Atakpamé** : Intégration Google Maps des sites clés de la ville.

## 🛠 Technologies Utilisées

Ce projet repose sur une stack React moderne axée sur les performances et le design premium, sans s'alourdir de frameworks CSS externes :

- **[React](https://react.dev/)** : Bibliothèque UI principale.
- **[Vite](https://vitejs.dev/)** : Bundler ultra-rapide pour le développement.
- **[Framer Motion](https://www.framer.com/motion/)** : Gestion des micro-animations et des transitions au défilement (Scroll Animations).
- **[Lucide React](https://lucide.dev/)** : Icônes vectorielles modernes et légères.
- **Vanilla CSS** : Design system complet basé sur les variables CSS (`:root`), le mode _Glassmorphism_ et des mises en page CSS Grid/Flexbox fluides.

## 📂 Architecture du Projet

```text
jnj2026/
├── public/                 # Assets statiques publics
├── src/
│   ├── components/         # Composants React isolés
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── Program.jsx/.css
│   │   └── ... (Autres composants)
│   ├── App.jsx             # Composant racine assemblant la page
│   ├── index.css           # Design System & styles globaux (variables, reset, utilitaires)
│   └── main.jsx            # Point d'entrée React
├── index.html              # Fichier HTML racine
├── vite.config.js          # Configuration Vite
└── package.json            # Dépendances et scripts
```

## 🚀 Installation & Lancement

Prérequis : Vous devez avoir **[Node.js](https://nodejs.org/)** installé sur votre machine.

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/Adate666/jnj.git
   cd jnj2026
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   Le site sera accessible localement à l'adresse (généralement) : `http://localhost:5173`.

## ⚙️ Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Compile l'application pour la production dans le dossier `dist`.
- `npm run preview` : Lance un serveur local pour prévisualiser la version de production.
- `npm run lint` : Vérifie le code avec ESLint.

## 🤝 Contribution

Si vous souhaitez contribuer à l'amélioration de ce site (corrections de textes, mises à jour des horaires du programme, intégration de nouvelles photos, etc.) :

1. Faites un *Fork* du projet.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`).
3. Validez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vers la branche (`git push origin feature/NouvelleFonctionnalite`).
5. Ouvrez une *Pull Request*.

---
*Conçu avec passion pour la Jeunesse Catholique du Togo.* 🙏

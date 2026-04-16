# JNJ Atakpamé 2026 🕊️

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> **Plateforme Numérique Officielle des Journées Nationales de la Jeunesse (JNJ) Catholique du Togo – Édition Atakpamé 2026.**

Ce projet est une application web moderne (Landing Page) conçue pour accompagner la jeunesse catholique togolaise dans la préparation et la participation au grand rassemblement de 2026 à Atakpamé. L'accent a été mis sur un design premium, une expérience utilisateur fluide et une accessibilité optimale sur tous les terminaux.

---

## 🌟 Points Forts du Projet

- **Design Premium & Immersif** : Utilisation de techniques modernes comme le glassmorphism, des dégradés harmonieux et une typographie raffinée (Outfit & Inter).
- **Expérience Interactive** : Animations fluides au défilement propulsées par Framer Motion, offrant une navigation vivante et engageante.
- **Architecture Mobile-First** : Une interface entièrement responsive, adaptée aux consultations sur smartphone lors de l'événement.
- **Gestion Dynamique des Dons** : Un bouton flottant original en forme de cœur facilitant les contributions via les plateformes locales (Flooz, T-Money) et internationales (Western Union, Ria).
- **Zéro Framework CSS Externe** : Système de design entièrement conçu en Vanilla CSS pour une performance maximale et une maintenance simplifiée.

---

## 🚀 Fonctionnalités Clés

1. **Section Hero** : Accueil visuel percutant avec le message central de l'édition.
2. **Pourquoi les JNJ** : Présentation pédagogique des enjeux spirituels et sociaux.
3. **Mot des Évêques** : Espace dédié au message officiel de la Conférence des Évêques du Togo.
4. **Programme Interactif** : Timeline détaillée du déroulement des journées.
5. **Pré-inscriptions** : Formulaire intuitif pour le recensement des pèlerins par diocèse.
6. **Guide du Pèlerin (FAQ)** : Réponses aux questions logistiques (Logement, Restauration, Transport).
7. **Carte Interactive** : Intégration Google Maps pour la localisation des sites stratégiques à Atakpamé.
8. **Partenaires** : Mise en avant des institutions et partenaires soutenant l'événement.

---

## 🛠 Stack Technologique

Le projet repose sur des technologies de pointe pour garantir rapidité, sécurité et évolutivité :

- **React 18** : Pour une gestion efficace des composants UI.
- **Vite.js** : Pour un environnement de développement ultra-rapide et des builds optimisés.
- **Framer Motion** : Pour orchestrer les micro-transitions et les séquences d'animation.
- **Lucide React** : Une bibliothèque d'icônes élégante et légère.
- **Vanilla CSS (Variables :root)** : Pour un design system cohérent, performant et facile à thémiser.

---

## 📂 Organisation du Code

```text
src/
├── components/          # Composants React modulaires (Navbar, Hero, Program, etc.)
│   ├── ui/              # Éléments d'interface réutilisables (Boutons, Cards)
│   └── ...              # Styles CSS spécifiques par composant
├── App.jsx              # Structure principale et assemblage des sections
├── index.css            # Design System global (Variables, Reset, Utilitaires)
└── main.jsx             # Point d'entrée de l'application
```

---

## ⚙️ Installation et Développement

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- Un gestionnaire de paquets (npm, yarn ou pnpm)

### Étapes d'installation

1. **Clonage du projet :**
   ```bash
   git clone https://github.com/votre-compte/jnj2026.git
   cd jnj2026
   ```

2. **Installation des dépendances :**
   ```bash
   npm install
   ```

3. **Lancement en mode développement :**
   ```bash
   npm run dev
   ```

4. **Construction pour la production :**
   ```bash
   npm run build
   ```

---

## 📈 Optimisation et Performance

Afin d'offrir la meilleure expérience aux utilisateurs, notamment dans des zones à connexion limitée :
- **Optimisation des Images** : Utilisation préférentielle du format WebP.
- **Lazy Loading** : Chargement différé des composants et des ressources lourdes.
- **Score SEO** : Balisage sémantique HTML5 et méta-données optimisées pour le référencement naturel.

---

## 🤝 Contribution

Les contributions pour améliorer l'expérience des JNJ sont les bienvenues !
1. Créez une branche de fonctionnalité (`git checkout -b feature/amelioration-x`).
2. Validez vos changements (`git commit -m 'Ajout de X'`).
3. Poussez votre branche (`git push origin feature/amelioration-x`).
4. Ouvrez une Pull Request détaillée.

---

*Ce projet est dédié à la jeunesse dynamique du Togo. Puisse-t-il être un outil au service de l'unité et de la foi.* 🙏

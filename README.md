

# Portfolio Personnel - Next.js

## Description
Portfolio professionnel développé avec Next.js, TypeScript et Tailwind CSS. Ce site présente mes expériences professionnelles, compétences techniques et projets.

## Architecture du Projet
```
📁 root/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml          # Configuration du déploiement GitHub Pages
│
├── 📁 app/
│   ├── 📄 globals.css            # Styles globaux
│   ├── 📄 layout.tsx             # Layout principal de l'application
│   └── 📄 page.tsx               # Page principale
│
├── 📁 components/
│   ├── 📁 kokonutui/
│   │   └── 📄 home-page.tsx      # Composant principal de la page d'accueil
│   │
│   ├── 📁 ui/                    # Composants UI réutilisables (shadcn/ui)
│   │
│   ├── 📄 CompanyBanner.tsx      # Bannière des entreprises
│   ├── 📄 TechnologyBanner.tsx    # Bannière des technologies
│   ├── 📄 professional-experiences.tsx  # Section expériences professionnelles
│   └── 📄 theme-provider.tsx     # Provider pour le thème
│
├── 📁 lib/
│   └── 📄 utils.ts               # Utilitaires partagés
│
├── 📁 public/
│   ├── 📁 images/
│   │   └── 📁 companies/         # Logos des entreprises
│   └── 📁 logos/                 # Logos des technologies
```

## Technologies Utilisées
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- GitHub Pages

## Fonctionnalités
- Design responsive
- Bannières défilantes des technologies et entreprises
- Section expériences professionnelles interactive
- Déploiement automatisé via GitHub Actions

## Scripts Disponibles
- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Démarre l'application en mode production
- `npm run lint` : Vérifie le code avec ESLint

## Déploiement
Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche main via GitHub Actions.

## Structure des Composants
- `home-page.tsx` : Page d'accueil principale
- `CompanyBanner.tsx` : Carrousel des logos d'entreprises
- `TechnologyBanner.tsx` : Carrousel des technologies
- `professional-experiences.tsx` : Section des expériences professionnelles

## Configuration
- TypeScript : `tsconfig.json`
- Tailwind : `tailwind.config.ts`
- Next.js : `next.config.mjs`
- PostCSS : `postcss.config.mjs`

## Licence
Ce projet est sous licence MIT.

## Contact
Maxime Molesin - [LinkedIn](https://www.linkedin.com/in/maximemolesin/)

---

Développé avec ❤️ par Maxime Molesin

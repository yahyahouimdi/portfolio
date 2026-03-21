# Portfolio Personnel

Site portfolio statique en un seul fichier HTML (CSS + JavaScript integres), pret pour GitHub Pages.

## Fichiers

- `index.html` : site complet (Hero, A propos, Projets, Competences, Contact, Footer)
- `README.md` : guide de deploiement et personnalisation

## Deploiement sur GitHub Pages

### 1. Initialiser Git localement

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
```

### 2. Creer le repository sur GitHub

1. Aller sur https://github.com/new
2. Nommer le repo (ex: `portfolio`)
3. Laisser le repo vide (sans README, sans .gitignore)
4. Creer le repository

### 3. Connecter le remote et pousser

Remplacer `VOTRE_UTILISATEUR` et `VOTRE_REPO`:

```bash
git branch -M main
git remote add origin https://github.com/VOTRE_UTILISATEUR/VOTRE_REPO.git
git push -u origin main
```

### 4. Activer GitHub Pages

1. Ouvrir le repo sur GitHub
2. Aller dans **Settings** > **Pages**
3. Dans **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Cliquer **Save**
5. Le site sera accessible en general sous:
   `https://VOTRE_UTILISATEUR.github.io/VOTRE_REPO/`

## Personnalisation rapide

Modifier directement dans `index.html`:

1. Nom et titre
   - Remplacer `Votre Nom` et `Developpeur Full Stack` dans la section Hero et la barre de navigation.

2. Bio et photo
   - Mettre votre texte dans la section **A propos**.
   - Remplacer le bloc `Photo Placeholder` par une image reelle (`<img src="..." alt="...">`).

3. Projets
   - Mettre a jour les 3 cartes projets:
     - titre
     - description
     - technologies
     - liens GitHub et demo live

4. Contact
   - Remplacer:
     - `votre.email@example.com`
     - lien LinkedIn
     - lien GitHub
   - Le formulaire ouvre votre client email via `mailto`.

5. Couleurs
   - Aller dans `:root` (en haut du CSS) et ajuster:
     - `--bg` (fond)
     - `--accent` (couleur principale)
     - `--text` (texte)

## Notes techniques

- Design responsive mobile-first
- Navigation sticky avec menu hamburger mobile
- Animations au scroll (fade-in)
- Mode sombre/clair avec sauvegarde locale (`localStorage`)
- Aucune dependance externe sauf Google Fonts

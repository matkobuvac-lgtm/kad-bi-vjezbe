# Kad bi vježbe

Baza vježbi za glumce — disanje, dikcija, mimika, glas, tijelo, impro i situacije.

## Deployment na GitHub Pages

### 1. Napravi GitHub repozitorij

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TVOJ_USERNAME/kad-bi-vjezbe.git
git push -u origin main
```

### 2. Uključi GitHub Pages

1. Idi na repozitorij → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → folder: `/ (root)`
4. Klikni **Save**

Za nekoliko sekundi aplikacija je dostupna na:
```
https://TVOJ_USERNAME.github.io/kad-bi-vjezbe/
```

### 3. Instalacija kao PWA

**Android (Chrome):**
Otvori URL → tri točke → "Dodaj na početni zaslon"

**iOS (Safari):**
Otvori URL → dijeli → "Dodaj na početni zaslon"

---

## Struktura projekta

```
kad-bi-vjezbe/
├── index.html      # Aplikacija
├── style.css       # Stilovi (Inter font, tamna tema)
├── app.js          # Logika + 192 vježbe
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline podrška)
├── icon.svg        # Ikonica aplikacije
├── .nojekyll       # Isključuje Jekyll processing
└── README.md
```

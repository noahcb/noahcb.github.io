# Noah Broestl – Personal Site

Static personal website for Noah Broestl, focusing on Responsible AI, ethics, and AI governance.

## Structure

- `index.html` – main single-page site
- `assets/css/styles.css` – styling
- `assets/js/main.js` – navigation, smooth scroll, back-to-top
- `assets/img/noah-broestl.jpg` – headshot (add your own)
- `assets/img/favicon.png` – optional favicon

## Local preview

You can open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Create a new GitHub repository (public is easiest).
2. Add these files and folders to the repo and commit.
3. Push to GitHub:

```bash
git init
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

4. In the GitHub web UI, go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (root)
6. Save. Your site will be live at the URL shown (typically `https://<username>.github.io/<repo>/`).

## Customization

- Replace copy in `index.html` as your roles, dates, or focus areas evolve.
- Swap out `assets/img/noah-broestl.jpg` with a preferred headshot.
- Adjust colors and spacing in `assets/css/styles.css` to match your personal branding.

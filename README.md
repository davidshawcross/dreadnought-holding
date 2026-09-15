# dreadnought

A single-page reactive site: "dreadnought" set in the Jersey 10 Google Font,
white on black, with each letter popping up in a mechanical, one-at-a-time
sequence.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` to
GitHub Pages automatically on every push to `main`.

To enable it after pushing this repo to GitHub:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).

The site will then be live at `https://<username>.github.io/<repo>/`.

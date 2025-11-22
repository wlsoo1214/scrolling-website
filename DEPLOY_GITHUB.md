# Deploying to GitHub Pages

Since the GitHub CLI (`gh`) is not installed, you'll need to create the repository manually. Follow these steps:

## 1. Create a New Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `apple-mock`).
3. Make sure it is **Public**.
4. Do **not** initialize with README, .gitignore, or License (we already have them).
5. Click **Create repository**.

## 2. Push Your Code
Copy the commands from the "…or push an existing repository from the command line" section on GitHub, or run these commands in your terminal:

```bash
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git branch -M main
git push -u origin main
```

## 3. Deploy
Once your code is pushed, run this command in your terminal to deploy:

```bash
npm run deploy
```

## 4. Enable GitHub Pages
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Select the `gh-pages` branch (this will be created automatically after you run `npm run deploy`).
4. Click **Save**.

Your site will be live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`.

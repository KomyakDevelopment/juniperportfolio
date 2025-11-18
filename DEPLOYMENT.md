# Deploying to Vercel

## Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (Press Enter for default or enter a custom name)
   - Directory? (Press Enter for current directory)
   - Override settings? **No**

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Method 2: Deploy via GitHub (Recommended for Continuous Deployment)

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (don't initialize with README)
   - Copy the repository URL

3. **Push to GitHub:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Create React App settings
   - Click "Deploy"

5. **Automatic deployments:**
   - Every push to `main` branch = Production deployment
   - Every push to other branches = Preview deployment

## Method 3: Deploy via Vercel Dashboard (Drag & Drop)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Vercel Dashboard:**
   - Visit https://vercel.com
   - Sign up/Login

3. **Deploy:**
   - Click "Add New Project"
   - Select "Upload" or drag and drop the `build` folder
   - Wait for deployment to complete

## Environment Variables

If you need to add environment variables:
- Go to your project settings on Vercel
- Navigate to "Environment Variables"
- Add your variables
- Redeploy

## Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Notes

- The `vercel.json` file is already configured for optimal deployment
- Vercel automatically detects Create React App projects
- Build output goes to the `build` folder
- All routes are configured to serve `index.html` for React Router compatibility



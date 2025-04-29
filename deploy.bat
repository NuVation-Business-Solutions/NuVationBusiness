@echo off
echo Deploying NuVation website...
git add .
git commit -m "Website update"
git push origin main
echo Deployment triggered via GitHub Actions.
pause
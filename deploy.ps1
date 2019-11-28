Write-Host "Attempting to deploy" 
# Build the Vue App
npm run build

# Change directory into the dist folder.
cd dist

# Add the CNAME file for custom domain support
echo 'zacharyseebeck.com' > CNAME

$message = Read-Host -Prompt 'Deploy message: '
cp ../'Deploy Readme.md' ./README.md

# Initialize and add everything to a new git repository
git init
git add -A
git commit -m $message

# Push to the GitHub repository.
git push -f https://github.com/ZacharySeebeck2020/zacharyseebeck2020.github.io.git master

# Go back to the starting directory.
cd ..

Write-Host "\n\n\nDeployed properly with message '$message'" 
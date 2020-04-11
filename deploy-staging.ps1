Write-Host "Attempting to deploy" 
# Build the Vue App
npm run build

# Change directory into the dist folder.
cd dist

# Add the CNAME file for custom domain support
echo 'staging.zacharyseebeck.com' > CNAME

$message = 'Staging'


# Initialize and add everything to a new git repository
git init
git add -A
git commit -m $message

# Push to the GitHub repository.
git push -f https://github.com/ZacharySeebeck2020/ZacharySeebeck.com-Staging.git master

# Go back to the starting directory.
cd ..

Write-Host "\n\n\nStaged properly with message '$message'" 
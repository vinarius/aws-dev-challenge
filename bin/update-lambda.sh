cd src/handleRecipes
tsc handler.ts
zip -q handleRecipes.zip handler.js
aws lambda update-function-code --function-name kraus --zip-file fileb://handleRecipes.zip --profile vf-team7 --region us-east-1
rm handler.js
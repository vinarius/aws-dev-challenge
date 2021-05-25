npm i
cp node_modules nodejs/node14/ -r
zip -r myLambdaLayer.zip nodejs/
aws s3 cp myLambdaLayer.zip s3://kraus-packaging/ --profile vf-team7 --region us-east-1
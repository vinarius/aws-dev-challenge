npm i

# -d
# Control will enter here if $DIRECTORY does not exist.

if [ ! -d "nodejs" ]; then
  mkdir nodejs
fi

if [ ! -d "nodejs/node14" ]; then
  mkdir nodejs/node14
fi

cp node_modules nodejs/node14/ -r
zip -r -q myLambdaLayer.zip nodejs/
aws s3 cp myLambdaLayer.zip s3://kraus-packaging/ --profile vf-team7 --region us-east-1
aws lambda publish-layer-version --layer-name krausLambdaLayer --content S3Bucket=kraus-packaging,S3Key=myLambdaLayer.zip --profile vf-team7 --region us-east-1
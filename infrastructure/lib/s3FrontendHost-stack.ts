import * as cdk from '@aws-cdk/core';
import {Bucket} from '@aws-cdk/aws-s3';

export class S3FrontendHostStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const HostingBucket = new Bucket(this, 'kraus-hostBucket', {
      bucketName: 'kraus-hostbucket',
      websiteIndexDocument: 'index.html',
      publicReadAccess: true
    });
  }
}
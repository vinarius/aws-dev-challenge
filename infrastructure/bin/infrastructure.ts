#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

import {S3FrontendHostStack} from '../lib/s3FrontendHost-stack';
import {CognitoUserPoolStack} from '../lib/cognitoUserPool-stack';

const app = new cdk.App();

// new S3FrontendHostStack(app, 'kraus-hostBucket');
new CognitoUserPoolStack(app, 'kraus-UserPoolStack');

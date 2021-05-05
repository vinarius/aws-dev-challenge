import * as cdk from '@aws-cdk/core';
import {UserPool} from '@aws-cdk/aws-cognito';

export class CognitoUserPoolStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const MyUserPool = new UserPool(this, 'kraus-UserPool', {
      userPoolName: 'kraus-UserPool',
      autoVerify: {
        email: true
      }
    });

    MyUserPool.addClient('kraus-client');
  }
}
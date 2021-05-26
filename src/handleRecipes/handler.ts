import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, QueryCommand} from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(
  new DynamoDBClient({})
);

exports.handler = async (event) => {
  console.log('event:', event);

  const query = new QueryCommand({
    TableName: 'kraus',
    ExpressionAttributeNames: {
      '#recipeName': 'recipeName'
    },
    ExpressionAttributeValues: {
      ':recipeValue': 'My First Recipe'
    },
    KeyConditionExpression: '#recipeName = :recipeValue'
  });

  const queryResponse = await client.send(query);

  return {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": {},
    // "multiValueHeaders": { "headername": ["headervalue", "headervalue2", ...], ... },
    "multiValueHeaders": {},
    "body": queryResponse
  }
};

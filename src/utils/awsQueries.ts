import * as AWS from "aws-sdk";
import * as dotenv from "dotenv";
import { ImageSize, LambdaPayload } from "../lib/types/types";

dotenv.config();

AWS.config.update({
   accessKeyId: process.env.AWS_ACCESS_KEY,
   secretAccessKey: process.env.AWS_SECRET_KEY,
   region: process.env.AWS_REGION,
});

const lambda = new AWS.Lambda();

// invoke AWS lambda function
export const triggerLambda = async (key: string, size: ImageSize) => {
   const lambdaFunction = process.env.AWS_LAMBDA_FUNCTION;

   if (!lambdaFunction) {
      throw new Error("Lambda function not defined");
   }

   const params: AWS.Lambda.InvocationRequest = {
      FunctionName: lambdaFunction,
      InvocationType: "RequestResponse",
      Payload: JSON.stringify({ key, size }),
   };

   const { Payload } = await lambda.invoke(params).promise();

   const result = Payload?.toString();

   if (!result) {
      throw new Error("No response from AWS");
   }

   const { body } = JSON.parse(result) as LambdaPayload;

   return body.preSignedUrl;
};

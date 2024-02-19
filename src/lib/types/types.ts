import type { Images } from "knex/types/tables.js";

// image sizes
export type ImageSize = "full" | "thumbnail";

// AWS Lambda Payload
export type LambdaPayload = {
   statusCode: number;
   body: {
      preSignedUrl: string;
   };
};

// Images type with image url
export interface ImageWithUrl extends Images {
   imageUrl: string;
}

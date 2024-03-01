import type { Images, Collections, Likes, Comments } from "knex/types/tables.js";

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

// Collection details with username
export interface UserCollection extends Collections {
   username: string;
}

// Likes with username
export interface LikesWithUsername extends Likes {
   username: string;
}

// Comments with username
export interface CommentsWithUsername extends Comments {
   username: string;
}

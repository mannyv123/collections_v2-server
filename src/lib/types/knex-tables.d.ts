import { Knex } from "knex"; //eslint-disable-line @typescript-eslint/no-unused-vars

declare module "knex/types/tables.js" {
   interface User {
      id: string;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      city: string;
      country: string;
      profile_img: string;
      cover_img: string;
      created_at: string;
      updated_at: string;
   }

   interface Collections {
      id: string;
      title: string;
      description: string;
      user_id: string;
      created_at: string;
      updated_at: string;
   }

   interface Images {
      id: string;
      name: string;
      location: string;
      city: string;
      country: string;
      collection_id: string;
      user_id: string;
      created_at: string;
      updated_at: string;
   }

   interface Likes {
      id: string;
      image_id: string;
      user_id: string;
      created_at: string;
      updated_at: string;
   }

   interface Comments {
      id: string;
      comment: string;
      image_id: string;
      user_id: string;
      created_at: string;
      updated_at: string;
   }

   interface Follows {
      id: string;
      follower_id: string;
      following_id: string;
      created_at: string;
      updated_at: string;
   }

   interface Tables {
      users: User;
      collections: Collections;
      images: Images;
      likes: Likes;
      comments: Comments;
      follows: Follows;
   }
}

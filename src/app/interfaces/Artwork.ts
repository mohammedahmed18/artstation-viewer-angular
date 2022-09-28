import { User } from './User';

export interface Artwork {
  hash_id: string;
  smaller_square_cover_url: string;
  hide_as_adult: boolean;
  title: string;
  user: User;
}

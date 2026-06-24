import { UserBadge } from './UserBadge';

export class User {
  id: number;
  name: string;
  image: string;
  badges: UserBadge[];
}

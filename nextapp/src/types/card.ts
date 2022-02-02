export interface Card {
  id: number;
  thumnail?: string;
  title?: string;
  description: string;
  text: string;
  userId: string;
  likes?: number;
  created_at: Date;
  updated_at: Date;
}

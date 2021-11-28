export type Posts = {
  id: number;
  content: string;
  likes: number;
  comments: string[];
  author: {
    id: number;
    name: string;
  }
}
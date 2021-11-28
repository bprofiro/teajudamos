export type Posts = {
  id: number;
  content: string;
  dateTime: string;
  likes: number;
  comments: string[];
  usuario: {
    id: number;
    nome: string;
  };
  comentario: string[];
};

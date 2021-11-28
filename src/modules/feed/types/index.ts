export type Posts = {
  id: number;
  content: string;
  dateTime: string;
  likes: number;
  usuario: {
    id: number | string;
    nome: string;
  };
  comentario: string[];
};

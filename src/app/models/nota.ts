export interface Nota {
  id?: string;
  titulo: string;
  contenido: string;
  fecha?: Date;
}
export interface NotaPost {
  id?: number; // Opcional porque al crear un post, no se envía el ID
  title: string;
  body: string;
  userId: number;
}

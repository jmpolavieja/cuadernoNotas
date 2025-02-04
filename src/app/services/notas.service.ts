import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotaPost} from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Obtener todos los posts
  getPosts(): Observable<NotaPost[]> {
    return this.http.get<NotaPost[]>(this.apiUrl);
  }

  // Obtener un post por ID
  getPostById(id: number): Observable<NotaPost> {
    return this.http.get<NotaPost>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo post (solo se guarda en la respuesta, no en la API real)
  createPost(post: NotaPost): Observable<NotaPost> {
    return this.http.post<NotaPost>(this.apiUrl, post);
  }

  // Actualizar un post existente
  updatePost(id: number, post: NotaPost): Observable<NotaPost> {
    return this.http.put<NotaPost>(`${this.apiUrl}/${id}`, post);
  }

  // Eliminar un post por ID
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

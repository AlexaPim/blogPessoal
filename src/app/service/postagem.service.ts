import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
    
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://alexapim.herokuapp.com/postagens', { headers: { 'Authorization': environment.userLogin.token } });
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`http://alexapim.herokuapp.com/postagens/${id}`, { headers: { 'Authorization': environment.userLogin.token } })
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('http://alexapim.herokuapp.com/postagens', postagem, { headers: { 'Authorization': environment.userLogin.token } })
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('http://alexapim.herokuapp.com/postagens', postagem, { headers: { 'Authorization': environment.userLogin.token } })
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://alexapim.herokuapp.com/postagens/${id}`, { headers: { 'Authorization': environment.userLogin.token } })
  }

}
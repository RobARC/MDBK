import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios.model';
import { IUsuarios } from '../crear-usuario/usuarios.class';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url_api: string = 'https://localhost:7030'

  constructor(private http: HttpClient) { }

  async getUsers(): Promise<Observable<Usuarios[]>> {
    return this.http.get<Usuarios[]>(`${this.url_api}/api/Usuarios`)
  }

  async putUsersId(id: string,  data: IUsuarios) {
    return await this.http.put(`${this.url_api}/api/Usuarios/${id}`, data).subscribe();
  }

  async SendPost(data: IUsuarios){
    return await this.http.post(`${this.url_api}/api/Usuarios`, data,).subscribe();
  } 

  async getUsersById(id: string) {
    return await this.http.get<IUsuarios[]>(`${this.url_api}/api/Usuarios/${id}`)
  }

  async DeleteUser(id: string){
    return await this.http.delete(`${this.url_api}/api/Usuarios/${id}`).subscribe();
  }

}

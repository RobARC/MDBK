import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  usuarios: any;
  usuarioId: string = "";

  constructor(
    private usuariosService: UsuariosService) { }
  
  ngOnInit(): void { 

    this.getData();

   }

  public async getData(){
    (await this.usuariosService.getUsers()).subscribe((resp: any) => {
      console.log(resp);
      this.usuarios = resp;
     });
    }

    public async deleteData(usuarioId: string) {
      try {
        (await this.usuariosService.DeleteUser(usuarioId));
        alert("Delete post successfully")
      } catch (error) {
        console.error(error);
      }
      this.getData();
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../models/usuarios.model';
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit  {

  checkoutForm: any;
  today = Date.now()
  date: Date = new Date(this.today);
  editMode: boolean = false;
  usuarios: Usuarios = new Usuarios();
  usuarioId!: number;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    public activatedRoute: ActivatedRoute
    ) { this.checkoutForm = this.fb.group({
          id:0,
          nombre: "",
          apellido: "",
          numeroId: "",
          email: "",
          fechaCreacion: this.date,
          password: ""
     });
    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] === undefined){
        return;
      }
      this.editMode = true;
      this.usuarioId = Number(params['id']);
      this.getDataById(this.usuarioId.toString())
  });
}

  public async getDataById(id: string) {
    //console.log(id);
    (await this.usuariosService.getUsersById(id)).subscribe(
      (resp: any)=> {
      this.getDataForm(resp), 
        (error: any) => console.error(error)
    })
  }

  getDataForm(data: any) {
    this.checkoutForm.patchValue({
      id: data.id,
      nombre: data.nombre,
      apellido: data.apellido,
      numeroId: data.numeroId,
      email: data.email,
      fechaCreacion: data.fechaCreacion,
      password: data.password,
      
    });
  }

  async onSubmit(){
  this.usuarios.Id= this.checkoutForm.value.id;
  this.usuarios.Nombre = this.checkoutForm.value.nombre;
  this.usuarios.Apellido = this.checkoutForm.value.apellido;
  this.usuarios.NumeroId = this.checkoutForm.value.numeroId;
  this.usuarios.Email = this.checkoutForm.value.email;
  this.usuarios.FechaCreacion = this.date;
  this.usuarios.Password = this.checkoutForm.value.password

  const data = this.checkoutForm.value;

    //Add and Update post
    if(this.editMode === true)
    {   
      try {
        await this.usuariosService.putUsersId(this.usuarioId.toString(), data);
        alert("Update Successful");
        this.checkoutForm.reset();

      } catch (error) {
        console.log(error);
        alert("Update Failed");
      }

    } else {
      try {
        await this.usuariosService.SendPost(data);

        alert("Registration Successful");

      } catch (error) {
        console.log(error);
        alert("Registration Failed");
      }
      this.checkoutForm.reset();
    }
  }
}

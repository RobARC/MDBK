import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterLink } from '@angular/router';
import { UsuariosService } from './servicios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'inicio', component: HomeComponent},
      {path: '',   redirectTo: 'inicio', pathMatch: 'full'}, 
      {path: 'registro', component: CrearUsuarioComponent}, 
      {path: 'inicio/usuarios-edit/:id', component: CrearUsuarioComponent},

    ]),
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

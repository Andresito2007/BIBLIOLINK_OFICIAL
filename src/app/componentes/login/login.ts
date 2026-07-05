//inject lo importamos para porque es
//  una funcion que le pide a angular que nos entregue un servicio.
import { Component, inject } from '@angular/core';

// FormsModule nos da ngMode para enlazar (conectados)
// a nuestros inputs de nuestro formulario a las variables
import { FormsModule } from '@angular/forms';

//CommonModule nos  da ngIf , ngFor y el pipe para poder
// mostrar o ocultar nuestros elementos condicionalmente.
import { CommonModule } from '@angular/common';

// PARA MANDAR AL USUARIO A NUESTRO COMPONENTE INICIO O ADMIN SEGUN EL IF
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule], // IMPORTAMOS ACA TAMBIEN
  templateUrl: './login.html',
  styleUrl: './login.css',
})
// EXPORTAMOS NUESTRA CLASE PARA PODER IMPORTARLA

// CREAMOS NUESTRAS VARIABLES DENTRO DE LA CLASE LOGIN
export class Login { 
  esRegistro: boolean = false;
  esAdmin : boolean= false;
  nombre: string="";
  correo:string = "";
  contrasena:string = "";
  codigoAdmin:string = "";
  mensajeError:string = "";
  // HACEMOS INYECCION DE DEPENDENCIAS
  private router = inject(Router);
  private authService = inject(AuthService);
  // CREAMOS NUESTRO METODO CUANDO EL USUARIO SE REGISTRE O INCIE SESION 
  Irinicio() {
    // NUESTRA VARIABLE DE MENSAJE DE ERROR PA MOSTRAR
    this.mensajeError = "";
    // NUESTRAS CONDICIONALES ANIDACION DE IF ( UN IF DENTRO DE OTRO)
    // SI ES REGISTRO EJECUT ESTE BLOQUE
    if (this.esRegistro) { 
      // SI CONTRASEÑA Y CORRE Y NOMBRE TAN VACIOS
      if(this.contrasena.trim() === "" || this.correo.trim()==="" || this.nombre.trim()===""){
          //.trim() es una funcion que usamos para eliminar los espacios en blanco del string que nos pase 
          this.mensajeError = "LOS CAMPOS DE REGISTRO NO DEBEN ESTAR VACIOS";
          return;
      } // ELSE IF= SI NO SE CUMPLE EL IF
    }else if (this.contrasena.trim() === "" || this.correo.trim()===""){
      //.trim() es una funcion que usamos para eliminar los espacios en blanco del string que nos pase 
      this.mensajeError = "LOS CAMPOS DE LOGEO NO DEBEN ESTAR VACIOS";
      return;
    }
    if (!this.correo.includes("@")) {
      //.includes() es una funcion que usamos pa verificar si un string contiene nuestro "@" en especifico.
      this.mensajeError = "EL CORREO DEBE CONTENER EL @";
      return;
    }
    //Si nuestro usuaeio esta en registro y quier registra como admin y el codigo no es correc muestr
    if (this.esRegistro && this.esAdmin && this.codigoAdmin !== "admin123") {
      this.mensajeError = "CODIGO DE ADMINISTRADOR INCORRECTO";
      return; // y retorna
    }
    // Si el usuario esta en registro y si es admin mandalo a modo administrador 
    if (this.esRegistro && this.esAdmin) {
      this.authService.esAdmin.set(true);// y nuestro esAdmin pasa a ser verdadero el de nuestro servicios
      this.router.navigate(['/administracion']);
      // si no cumple este if mandalo a inicio
    } else {
      this.router.navigate(['/inicio']);
    }
  }
}

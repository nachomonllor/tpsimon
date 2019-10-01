import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/modelos/jugador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //searchUsers();
  constructor(public firebaseService: FirebaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
// Cambialo a tu propio
  login(user: string, pass: string) {

    this.firebaseService.searchUsers(user)
    .subscribe(
      data => {
       //  resolve(data);
       console.log(data.data() ); // eso tiene todos los datos del usuario
       let usuario = data.data();
 
       if (!usuario){
         console.log("NO EXISTE USUARIO!");
       } else if (usuario.pass == pass) {

        let jugador = new Jugador(usuario.nombre);
        localStorage.setItem("Jugador", JSON.stringify(jugador));
         console.log("BIENVENIDO ---->>  "+usuario.nombre);
         //location.assign("/home"); // rEDIREGIR
       }
 
       });
     }
}

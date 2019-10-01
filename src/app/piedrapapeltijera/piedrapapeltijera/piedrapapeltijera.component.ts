import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  indiceElementoSeleccionado: number;
   
  //podria ser un array de urls con imagnes de piedra, papel y tijera
  arrayElementos = new Array<string> ("piedra", "papel", "tijera");

  elementoSeleccionado :string;

  //tendria que haber un selector de imagenes de piedra papel tijera
  palabraIngresada:string;

  puntajeHumano:number=0;
  puntajeCompu:number=0;


  seleccionarElemento() {
    this.indiceElementoSeleccionado = Math.floor(Math.random() * 3);

   // console.log(this.indiceElementoSeleccionado);

    this.elementoSeleccionado = this.arrayElementos[this.indiceElementoSeleccionado];

  }
  

  constructor() { }

  ngOnInit() {

    this.seleccionarElemento();

  }

    resultado :string = "";

    comparar() {

          if(this.elementoSeleccionado == "piedra") {
              
              if(this.palabraIngresada == "piedra") {
                  this.resultado = "EMPATE";
              }
              else if(this.palabraIngresada == "papel") {
                this.resultado = "GANO EL USUARIO";
                this.puntajeHumano +=10;
              } 
              else{
                this.resultado = "GANA LA COMPU";
                this.puntajeCompu +=10;
              }
          }

          else if(this.elementoSeleccionado == "papel") {
              
            if(this.palabraIngresada == "piedra") {
                this.resultado = "GANA LA COMPU";
                this.puntajeCompu +=10;
            }
            else if(this.palabraIngresada == "papel") {
              this.resultado = "EMPATE";
            } 
            else{
              this.resultado = "GANA EL USUARIO";
              this.puntajeHumano +=10;
            }
        }

        else if(this.elementoSeleccionado == "tijera") {
              
          if(this.palabraIngresada == "piedra") {
              this.resultado = "GANA EL USUARIO"; 
              this.puntajeHumano +=10;
          }
          else if(this.palabraIngresada == "papel") {
            this.resultado = "GANA LA COMPU"; 
            this.puntajeCompu +=10;
          } 
          else{
            this.resultado = "EMPATE"; 
          }
      }

  }

  
  clickPapel(){
    this.palabraIngresada = "papel";
    this.comparar();
    this.seleccionarElemento();
    //Primer asignarpuntaje a la compu y al usuario
    //contador de cantidad rondas
    //puntaje para la compu y el humano.
  }
  clickPiedra(){
    this.palabraIngresada = "piedra";
    this.comparar();
    this.seleccionarElemento();
    
  }
  clickTijera() {
    this.palabraIngresada = "tijera";
    this.comparar();
    this.seleccionarElemento();
  }

}

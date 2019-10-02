import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/modelos/jugador';
import { Juego } from 'src/modelos/juego';

@Component({
  selector: 'app-agilidadaritmetica',
  templateUrl: './agilidadaritmetica.component.html',
  styleUrls: ['./agilidadaritmetica.component.css']
})
export class AgilidadaritmeticaComponent implements OnInit {

  num1:number;
  num2:number;
  res:number;
  operadorSeleccionado:string;
  indiceOperador: number;
  resUsuario :number;
  _timer:any;
  comparacion :string;
  reloj:number =10;
  puntos:number=0;
  //1 creas el jugador
  jugador:Jugador;
  juego:Juego;
  //arrayOperadores = new Array<string>("+","-", "*");
  constructor() 
  { 
    //2.colocar nombre del juego
     this.juego = new Juego();
     this.juego.nombre = "Agilidad Aritmetica";
     this.juego.cantidadPuntos =0;
     this.juego.hora = new Date();
   //console.log(this.juego);

  }
  ngOnInit() {
 //3.Recupera jugador de la base de datos
    this.jugador = JSON.parse(localStorage.getItem('jugador'));
  console.log(this.jugador); 
  /*
  console.log(this.jugador);  
  this.cargarNumeros();
    this._timer = setInterval(() => this.contador(), 1000);
    */
}
comenzar() {
   
  this.cargarNumeros();
    this._timer = setInterval(() => this.contador(), 1000);
}

contador(){
  //clearInterval(myVar);
this.reloj--;
if(this.reloj==0){
  clearInterval(this._timer);
  alert("Se te acabo el tiempo");
  //this.puntos=this.puntos-10;
  this.reloj=10;
  this.pasarSiguiente();
 }
// this.pasarSiguiente();
}

pasarSiguiente(){
  this._timer = setInterval(() => this.contador(), 1000);
  this.cargarNumeros();
}
  cargarNumeros() {

    this.num1  = Math.floor(Math.random() * 10);
    this.num2  = Math.floor(Math.random() * 10);
    this.indiceOperador = Math.floor(Math.random() * 3);

    if(this.indiceOperador == 0) {
      this.res = this.num1 + this.num2;
      this.operadorSeleccionado = "+";
    }
    else if(this.indiceOperador == 1) {
        this.res = this.num1 - this.num2;
        this.operadorSeleccionado = "-";
    }
    else if(this.indiceOperador == 2) {
        this.res = this.num1 * this.num2;
        this.operadorSeleccionado = "*";
    }
  }

   
   comparar() {
     if(this.res == this.resUsuario) {
        this.comparacion ="CORRECTO";
        this.puntos=this.puntos+10;        
        clearInterval(this._timer);  
        this.reloj=10;
        this.pasarSiguiente();
     }
     else{
       this.comparacion ="INCORRECTO-Escriba de vuelta el resulta";
       if(this.puntos>=0){
        this.puntos=this.puntos-10;
       }    
     }
   }
   finalizar(){
    clearInterval(this._timer);
    //4.finaliza el juego, cargas datos
    this.juego.cantidadPuntos=this.puntos;
    this.jugador.juegos.push(this.juego);
    //5. guardas en la base de datos
    localStorage.setItem('jugador', JSON.stringify(this.jugador));
    console.log(this.jugador);

    //6.resetas el juego
     this.juego = new Juego();
     this.juego.nombre = "Agilidad Aritmetica";
     this.juego.cantidadPuntos =0;
     this.juego.hora = new Date();

   }



}

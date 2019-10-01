import { Component, OnInit } from '@angular/core';

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
  //arrayOperadores = new Array<string>("+","-", "*");
  constructor() 
  { 
   

  }
  ngOnInit() {
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
   parar(){
    clearInterval(this._timer); 
   }



}

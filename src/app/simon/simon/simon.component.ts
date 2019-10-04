import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { analytics } from 'firebase';
//import { SchedulerService } from './schedule';
import { interval, Subject, timer } from 'rxjs';
import { map, take, tap, throttleTime } from 'rxjs/operators';

//import (timer} from 'rxjs';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})


export class SimonComponent implements OnInit {

  secuencia: Array<number>;
  _timer:any;
  reloj:number = 10;
  contador:number = 0;
  max_sec:number = 25; 
  //sched:  SchedulerService;
  delay:number = 500; 

  estadoRojo:string = "rojo";
  estadoAzul:string = "azul";
  estadoVerde:string = "verde";
  estadoVioleta:string = "violeta";
  
  indiceSecuencia : number = 0;
  
  apagados:Array<string>;// {"rojo", "azul","verde", "violeta"};
  encendidos :Array<string>;

  secuenciaUsuario:Array<number>;
  limite:number = 15;
  resultadoJuego:string = "secuencia completa";

  constructor()
  {
      this.secuencia = new Array<number>();
     //Math.floor(Math.random() * 3);
      for(let i =0; i< this.max_sec; i++) {
          this.secuencia.push(Math.floor(Math.random() * 4)); 
      }
      
     // this.apagados = new Array("rojo", "azul", "verde", "violeta");
     // this.encendidos = new Array("rojo_claro", "azul_claro", "verde_claro", "violeta_claro");
      this.secuenciaUsuario = new Array<number>();
  }

 
  comparar() {
     for(let i = 0; i<this.limite; i++) {
         if(this.secuencia[i] != this.secuenciaUsuario[i]) {
            this.resultadoJuego = "Perdiste!!";
            break;
         }
     }
  }


  ngOnInit() {

  }

  // mostrarSecuencia() {
  //this.parar();
  //this._timer = setInterval(() => this.funciones, 500);
  // this.parar();
  // this._timer = setInterval(() => this.apagarTodos(), 200);
  //this.parar();
  //}

  //encendidosActual:Array<string>("")
  prenderRojo() {
    this.apagarTodos();
    this.estadoRojo = "rojo_claro";
  }

  prenderVerde() {
   this.apagarTodos();
   this.estadoVerde = "verde_claro";
  }

  prenderAzul() {
    this.apagarTodos();
    this.estadoAzul = "azul_claro";
  }
  prenderVioleta() {
    this.apagarTodos();
    this.estadoVioleta = "violeta_claro";
  }

  apagarTodos() {
    this.estadoRojo = "rojo";
    this.estadoAzul = "azul";
    this.estadoVerde = "verde";
    this.estadoVioleta = "violeta";
  }
  
    
    //enciendeRojo = 
    presionaRojo() {
      this.secuenciaUsuario.push(0);
    }

    presionaVerde(){
        this.secuenciaUsuario.push(1);
    }
    
    presionaAzul() {
      this.secuenciaUsuario.push(2);
    }
    presionaVioleta() {
      this.secuenciaUsuario.push(3);
    }
   
    mostrarColor()  {
        if(this.secuencia[this.indiceSecuencia] == 0) {
              this.prenderRojo();
          }
          else if(this.secuencia[this.indiceSecuencia] == 1) {
              this.prenderVerde();
          }
          else if(this.secuencia[this.indiceSecuencia] == 2) {
              this.prenderAzul();
          }
          else {
              this.prenderVioleta();
          }
          if(this.indiceSecuencia + 1 < this.max_sec) {
              this.indiceSecuencia++;
          }
     }

   parar(){
    clearInterval(this._timer); 
   }
  
   
   mostrarSecuencia() {
    timer(this.delay, 1000).pipe(
      take(this.secuencia.length)).subscribe(x=>{
           this.mostrarColor();
           //this.apagarTodos();
       })
   }
   
   
   mostrarSecuenciaConLimite() {
    timer(this.delay, 3000).pipe(
      take(this.limite)).subscribe(x=>{
           this.mostrarColor();
           //this.apagarTodos();
       })
     this.apagarTodos();
    // this.mostrarColor();
   }

   mostrarSecuenciaUsuario() {
      //muestro la secuencia del usuario por consola
     for(let i = 0; i<this.secuenciaUsuario.length; i++) {
       console.log(this.secuenciaUsuario[i] + " ");
     }

   }

   Jugar() {
      
      //for(let i =0; i<this.limite; i++) {
       for(this.limite = 1; this.limite < this.secuencia.length; this.limite++)
       { 
         this.mostrarSecuenciaConLimite();
         //this.mostrarSecuenciaUsuario();
         //this.comparar();
       }

   }



}

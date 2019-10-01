import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  private palabras : Array<string>  ;

  palabraOrdenada :string; //palabra original del arreglo
  palabraDesordenada:string; //desordena algoritmo
  palabraIngresada:string; //ingresa usuario
  intentos:number =0;
  resultado :string ="Esperando: ";

  puntos: number = 0;  

  constructor() {

      this.palabras = new Array<string>();
      this.palabras.push("computadora");
      this.palabras.push("microfono");
      this.palabras.push("mesa");
      this.palabras.push("telefono");
      this.palabras.push("anagrama");
   }

   ngOnInit() {
    this.seleccionarPalabra();
    this.desordenarPalabra();
  }



   seleccionarPalabra() {
       var indSeleccionado = Math.floor(Math.random() * this.palabras.length);
       //console.log(indSeleccionado);
       //console.log(  this.palabras[indSeleccionado]);
        this.palabraOrdenada = this.palabras[indSeleccionado];
   }

   desordenarPalabra() {//algoritmo de Fisher–Yates 

      //this.palabraDesordenada = shuffle
      var ch = new Array();
      var n = this.palabraOrdenada.length;

      for(let i =0; i < this.palabraOrdenada.length; i++) {
        ch.push(this.palabraOrdenada[i]);
      }

      for (let i = n - 1; i > 0; i--)
      {
           //var j = r.Next(0, i + 1);
           var j =  Math.floor(Math.random() * (i + 1));
            var temp = ch[i];
            ch[i] = ch[j];
            ch[j] = temp;
        }
        this.palabraDesordenada ="";
        for(let i =0; i<ch.length; i++) {
           this.palabraDesordenada += ch[i];
        }

        console.log(this.palabraDesordenada);

   }

   

   comparar() {

      if(this.intentos < 5) {
        this.intentos++;
        if(this.palabraOrdenada == this.palabraIngresada ) {
            //console.log( "ACERTASTE" ); 
           // alert("ACERTASTE");
            this.resultado = "ACERTASTE";
            this.puntos += 10;
            this.seleccionarPalabra();
            this.desordenarPalabra();
            this.intentos = 0;
            this.palabraIngresada="";
        }
        else {
            console.log( "TE EQUIVOCASTE" );
            this.resultado = "TE EQUIVOCASTE";
            this.puntos -= 5;
        }
        
        console.log(this.intentos);
    }else{

      //this.resultado="Pasaste los 5 intentos permitidios";
      //alert("Pasaste los 5 intentos permitidos");
      this.resultado = "Pasaste los 5 intentos permitidos";
      //this.resultado = "Esperando";
      this.seleccionarPalabra();
      this.desordenarPalabra();
      //this.resultado = "";
      this.intentos = 0;
      this.palabraIngresada="";
   
   
    }

    //console.log("PERDISTE");
     
   }
 

}

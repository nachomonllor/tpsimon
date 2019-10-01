import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {


  

  constructor() { }

  ngOnInit() {
  }

  posiciones=[['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];
  jugador='O';
  

  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar() {
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posiciones[f][c]='-';
  }

  cambiarJugador() {
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';    
  }
 
  resultado:string;

  verificarGano(ficha: string) {
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha)
      //alert('Gano:'+ficha);
      this.resultado += "Gano:" + ficha;
    else if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha)
     // alert('Gano:'+ficha);
     this.resultado += "Gano:" + ficha;
    else if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha)
     // alert('Gano:'+ficha);
     this.resultado += "Gano:" + ficha;
    else if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha)
     // alert('Gano:'+ficha);
     this.resultado += "Gano:" + ficha;
    else if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha)
     // alert('Gano:'+ficha);
     this.resultado += "Gano:" + ficha;
    else if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha)
     // alert('Gano:'+ficha); 
     this.resultado += "Gano:" + ficha;
    else if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha)
      //alert('Gano:'+ficha);
      this.resultado += "Gano:" + ficha;
     else if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha)
      //alert('Gano:'+ficha); 
      this.resultado += "Gano:" + ficha;
      
  }


}

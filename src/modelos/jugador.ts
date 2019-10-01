import { Juego } from './juego';

export class Jugador {
    nombre: string;
    juegos:Array<Juego>;
    
    constructor(_nombre){
      this.nombre= _nombre;
    }
    
  }
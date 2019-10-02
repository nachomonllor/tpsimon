import { Jugador } from './jugador';
import { Juego } from './juego';

//import { Hero } from './hero';

/*
export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];*/

var _juegos: Juego[] = [];

export const USUARIOS: Jugador[] = [
    {
        nombre:"Juan Perez",
        juegos: _juegos,
        usuario:"jjperez",
        contras:"123456" 
       },
       {
           nombre:"Ignacio Monllor",
           juegos: _juegos,
           usuario:"imonllor",
           contras:"123456" 
       },
       {
           nombre:"Ana Lopez",
           juegos: _juegos,
           usuario:"alopez",
           contras:"123456" 
       },
    ];
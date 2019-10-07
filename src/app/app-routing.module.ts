import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramaComponent } from './anagrama/anagrama/anagrama.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera/piedrapapeltijera.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica/agilidadaritmetica.component';
import { TatetiComponent } from './tateti/tateti/tateti.component';

import { Login2Component } from './login2/login2.component';
import { Menuprincipal2Component } from './menuprincipal2/menuprincipal2.component';

const routes: Routes = [
 // {path:  'home', component: Menuprincipal2Component},
  {path: '' , component: Menuprincipal2Component},
  
  {path: 'anagrama' , component:AnagramaComponent},
  {path: 'piedrapapeltijera' , component:PiedrapapeltijeraComponent},
  {path: 'agilidadaritmetica' , component:AgilidadaritmeticaComponent},
  {path: 'tateti' , component:TatetiComponent},
 
  //Login2Component
 // {path: 'login2', component:Login2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

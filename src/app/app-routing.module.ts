import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramaComponent } from './anagrama/anagrama/anagrama.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera/piedrapapeltijera.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica/agilidadaritmetica.component';
import { TatetiComponent } from './tateti/tateti/tateti.component';
import { SimonComponent } from './simon/simon/simon.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:  'home', component: MenuprincipalComponent},
  {path: '' , component: MenuprincipalComponent},
  {path: 'juegos' , component: MenuComponent},
  {path: 'anagrama' , component:AnagramaComponent},
  {path: 'piedrapapeltijera' , component:PiedrapapeltijeraComponent},
  {path: 'agilidadaritmetica' , component:AgilidadaritmeticaComponent},
  {path: 'tateti' , component:TatetiComponent},
  {path: 'simon' , component:SimonComponent},
  {path: 'login', component:LoginComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

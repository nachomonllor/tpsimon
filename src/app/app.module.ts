import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramaComponent } from './anagrama/anagrama/anagrama.component';
import { FormsModule } from '@angular/forms';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera/piedrapapeltijera.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica/agilidadaritmetica.component';
import { AdivinaelnumeroComponent } from './adivinaelnumero/adivinaelnumero/adivinaelnumero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TatetiComponent } from './tateti/tateti/tateti.component';

import { MatButtonModule } from '@angular/material/button';
import { SimonComponent } from './simon/simon/simon.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Login2Component } from './login2/login2.component';




@NgModule({
  declarations: [
    AppComponent,
    AnagramaComponent,
    PiedrapapeltijeraComponent,
    AgilidadaritmeticaComponent,
    AdivinaelnumeroComponent,
    TatetiComponent,
    SimonComponent,
    MenuprincipalComponent,
    CabeceraComponent,
    MenuComponent,
   
    Login2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
     AngularFireModule.initializeApp(environment.firebase, 'TP2'), // For firebase
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule ,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { enviroment } from 'src/enviroments/enviroments';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoticiaComponent,
    NosotrosComponent,
    HomeComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireStorageModule
  ],


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

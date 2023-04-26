import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const route: Routes = [
{
  path: 'home', component: HomeComponent},
{path:'nosotros', component: NosotrosComponent },
{path:'noticia', component: NoticiaComponent },
{path:'contactanos', component: ContactanosComponent },
{path: '**', redirectTo:'home'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

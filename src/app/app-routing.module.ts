import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [

  {path: 'comunicati', component: ArticlesComponent , data: {cover: 'assets/comunicati.jpg', title: ''}},
  {path: 'home', component: LandingComponent , data: {cover: 'assets/curva.jpg', title: 'Asd Aurora Vanchiglia'}},
  {path: '**', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

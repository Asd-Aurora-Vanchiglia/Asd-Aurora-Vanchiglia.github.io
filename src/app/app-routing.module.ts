import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ItemNotImplementedComponent } from './item-not-implemented/item-not-implemented.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [

  // tslint:disable-next-line:max-line-length
  { path: 'supporters', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Supporters' } },
  // tslint:disable-next-line:max-line-length
  { path: 'altri', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Altre Squadre' } },
  // tslint:disable-next-line:max-line-length
  { path: '11-boyz', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Calcio a 11 Maschile' } },
  // tslint:disable-next-line:max-line-length
  { path: '5-girlz', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Calcio a 5 Femminile' } },
  // tslint:disable-next-line:max-line-length
  { path: 'calendario-partite', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Calendario Partite' } },
  { path: 'podcast', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Podcast' } },
  { path: 'iniziative', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Iniziative' } },
  { path: 'chisiamo', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.png', title: 'Chi siamo' } },
  { path: 'comunicati', component: ArticlesComponent, data: { cover: 'assets/comunicati.jpg', title: '' } },
  { path: 'home', component: LandingComponent, data: { cover: 'assets/curva.jpg', title: 'Asd Aurora Vanchiglia' } },
  { path: '**', redirectTo: 'home' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

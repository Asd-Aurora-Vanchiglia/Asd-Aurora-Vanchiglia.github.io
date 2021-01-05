import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ItemNotImplementedComponent } from './item-not-implemented/item-not-implemented.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [

  // tslint:disable-next-line:max-line-length
  { path: 'supporters', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Supporters' } },
  // tslint:disable-next-line:max-line-length
  { path: 'altri', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Altre Squadre' } },
  // tslint:disable-next-line:max-line-length
  { path: '11-boyz', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Calcio a 11 Maschile' } },
  // tslint:disable-next-line:max-line-length
  { path: '5-girlz', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Calcio a 5 Femminile' } },
  // tslint:disable-next-line:max-line-length
  { path: 'calendario-partite', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Calendario Partite' } },
  { path: 'podcast', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Podcast' } },
  { path: 'iniziative', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Iniziative' } },
  { path: 'chisiamo', component: ItemNotImplementedComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Chi siamo' } },
  { path: 'comunicati', component: ArticlesComponent, data: { cover: 'assets/comunicati-2.jpg', title: 'Comunicati' } },
  { path: 'comunicati/:id', component: ArticleComponent, data: { cover: '', title: '' } },
  { path: 'home', component: LandingComponent, data: { cover: 'assets/curva2.jpg', title: 'Asd Aurora Vanchiglia' } },
  { path: '**', redirectTo: 'home' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

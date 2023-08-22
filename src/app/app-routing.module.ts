import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { ArticlesComponent } from './component/articles/articles.component';
import { GroupEditorComponent } from './pages/group-editor/group-editor.component';
import { GroupViewComponent } from './pages/group-view/group-view.component';
import { ItemNotImplementedComponent } from './pages/item-not-implemented/item-not-implemented.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ReservedAreaComponent } from './pages/reserved-area/reserved-area.component';
import { GroupResolver } from './resolvers/group.resolver';



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
  { path: 'group',  data: { cover: 'assets/curva2.jpg', title: 'Asd Aurora Vanchiglia' },
    children: [
      {path: ':title', component: GroupViewComponent },
    ]
  },
  { path: 'manage', data: { cover: 'assets/curva2.jpg', title: 'Gestione', isManage: true },
    children: [
        { path: '', component: ReservedAreaComponent, data: { cover: 'assets/curva2.jpg', title: 'Gestione' }},
        { path: 'groups/new', component: GroupEditorComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Gestione' } },
        { path: 'groups/:id', component: GroupEditorComponent, data: { cover: 'assets/manutenzione.jpg', title: 'Gestione' }, resolve: {group: GroupResolver} },
    ] },
  { path: '**', redirectTo: 'home' }



];

const routerModule = RouterModule.forRoot(routes, {});

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

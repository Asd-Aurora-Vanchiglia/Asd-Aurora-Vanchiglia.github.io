import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NgxEditorModule } from 'ngx-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import { ArticlesComponent } from './component/articles/articles.component';
import { GroupEditorComponent } from './pages/group-editor/group-editor.component';
import { ItemNotImplementedComponent } from './pages/item-not-implemented/item-not-implemented.component';
import { ReservedAreaComponent } from './pages/reserved-area/reserved-area.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ArticlePreviewComponent } from './component/article-preview/article-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ArticlesComponent,
    ArticleComponent,
    ItemNotImplementedComponent,
    ArticlePreviewComponent,
    ReservedAreaComponent,
    GroupEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatCheckboxModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

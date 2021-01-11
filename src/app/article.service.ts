import { Injectable } from '@angular/core';
import { Article } from './entity/article.entity';
import { ARTICLES } from './mock/articles.mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }


  get_evidencied(): Article[] {
    return ARTICLES;
  }

  get_by_id(id: string): Article {
    return ARTICLES.filter(article => article.id === id)[0];
  }

}

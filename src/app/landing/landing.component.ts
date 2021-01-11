import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../entity/article.entity';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  articles: Article[] = [];
  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articlesService.get_evidencied();
  }

}

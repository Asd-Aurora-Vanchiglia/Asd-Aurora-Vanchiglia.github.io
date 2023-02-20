import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/entity/article.entity';
import { ArticleService } from 'src/app/services/article/article.service';


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

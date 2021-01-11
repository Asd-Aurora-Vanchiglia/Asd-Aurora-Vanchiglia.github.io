import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { CoverService } from '../cover.service';
import { Article } from '../entity/article.entity';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, AfterViewInit {

  article: Article;
  constructor(private articlesService: ArticleService, private coverService: CoverService, private route: ActivatedRoute) { }

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');

    this.article = this.articlesService.get_by_id(articleId);

    this.coverService.cover.next({title: '', cover: this.article.coverImage});
  }

  ngAfterViewInit() {
    this.coverService.cover.next({title: '', cover: this.article.coverImage});
  }

}

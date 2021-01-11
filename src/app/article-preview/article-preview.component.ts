import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../entity/article.entity';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() maxLength = 240;

  @Input() article: Article;

  @Input() previewEnd = '...';

  @Input() coverOnLeft = true;

  constructor() { }

  ngOnInit() {
  }


  article_body_preview(): string {
    if (this.article.body.length > this.maxLength) {
      let bodyPreview = this.article.body.substring(0, this.maxLength - this.previewEnd.length);
      bodyPreview = bodyPreview.substring(0, bodyPreview.lastIndexOf(' ')).concat(this.previewEnd);
      return bodyPreview;
    } else {
      return this.article.body;
    }
  }

  isEllipsed(): boolean {
    return this.article.body.length > this.maxLength;
  }



}

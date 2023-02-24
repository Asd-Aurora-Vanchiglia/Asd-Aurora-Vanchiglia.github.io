import { Component, OnInit } from '@angular/core';
import { GroupViewDto } from 'src/app/api/models';
import { GroupControllerService } from 'src/app/api/services';
import { Article } from 'src/app/entity/article.entity';
import { ArticleService } from 'src/app/services/article/article.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  groups: GroupViewDto[] = [];

  articles: Article[] = [];
  constructor(private articlesService: ArticleService, private groupService: GroupControllerService) { }

  ngOnInit() {
    this.articles = this.articlesService.get_evidencied();

    this.groupService.getAll().subscribe((listWrapperGroups) => {
      this.groups = listWrapperGroups.content;
    })
  }

}

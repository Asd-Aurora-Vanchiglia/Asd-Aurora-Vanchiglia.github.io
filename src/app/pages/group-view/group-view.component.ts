import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupViewDto } from 'src/app/api/models';
import { GroupControllerService } from 'src/app/api/services';
import { CoverService } from 'src/app/services/cover/cover.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {

  group!: GroupViewDto

  constructor(private groupService: GroupControllerService, private route: ActivatedRoute, private coverService: CoverService) {

  }
  ngOnInit(): void {
    const groupTitle = this.route.snapshot.params.title

    this.groupService.getByTitle(groupTitle).subscribe(group => {
      console.log('Loaded group:', group);
      this.group = group;
      this.coverService.cover.next({ title: '', cover: this.group.coverImageId });
    });

  }

}

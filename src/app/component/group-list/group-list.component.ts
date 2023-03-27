import { Component, OnInit } from '@angular/core';
import { GroupViewDto } from 'src/app/api/models';
import { GroupControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  testA = [...Array(5).keys()];

  groups: GroupViewDto[] = [];

  constructor(private groupService: GroupControllerService){}
  
  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(){
    this.groupService.getAll().subscribe( listWrapper => {
      this.groups = listWrapper.content;
    });
  }


}

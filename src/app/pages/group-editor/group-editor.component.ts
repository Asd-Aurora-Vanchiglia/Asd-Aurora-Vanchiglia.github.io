import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { Editor } from 'ngx-editor';
import { GroupControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.component.html',
  styleUrls: ['./group-editor.component.scss']
})
export class GroupEditorComponent implements OnInit {


  editor = new Editor();
  groupForm: FormGroup<any>;

  get url_preview(): string {
    const s: string = this.groupForm?.get('title')?.value;
    return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/team/${s.toLowerCase().trim().replace(/ /g, '-')}`;
  }

  constructor(private formBuilder: FormBuilder, private  groupService: GroupControllerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.groupForm = this.formBuilder.group({
      title: '',
      onMenu: false,
      description: '',
      icon: '',
    });
  }

  print(){
    this.groupService.createGroup({body: this.groupForm.value}).subscribe((group) => {
      console.log('Saved Group: ', group);
    });
    console.log('Form: ', this.groupForm.value);
  }

}

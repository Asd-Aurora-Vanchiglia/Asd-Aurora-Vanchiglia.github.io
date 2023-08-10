import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { Editor } from 'ngx-editor';
import { GroupControllerService } from 'src/app/api/services';
import { GroupViewComponent } from '../group-view/group-view.component';
import { HttpProgressEvent } from '@angular/common/http';
import { GroupViewDto } from 'src/app/api/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.component.html',
  styleUrls: ['./group-editor.component.scss']
})
export class GroupEditorComponent implements OnInit {


  editor = new Editor();
  groupForm: FormGroup<any>;
  fileName = '';
  coverImage: FormData;
  fileBlob: Blob
  progressState = 0;
  progressColor = null;


  get url_preview(): string {
    const s: string = this.groupForm?.get('title')?.value;
    return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/group/${s.toLowerCase().trim().replace(/ /g, '-')}`;
  }

  constructor(private formBuilder: FormBuilder, private groupService: GroupControllerService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  showIconSeletcion(event: any){
    console.log("Event: ", event);
    this.groupForm.get('icon')?.setValue(event);
  }

  initForm() {
    this.groupForm = this.formBuilder.group({
      title: '',
      onMenu: false,
      description: '',
      icon: '',
    });
  }

  save() {

    this.progressColor = null;
    this.progressState = 0;

    this.groupService.createGroup({ body: this.groupForm.value }).subscribe((group) => {
      this.progressState = 50;

      this.groupService.updateImage({ id: group.id, image: this.fileBlob }).subscribe((data) => {
        if ('id' in data) {
          data = data as GroupViewDto;
          this.progressState = 100;
          this.progressColor = 'green';
          this.snackBar.open(`Gruppo ${data.title} salvato`, '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 5000 })
            .afterDismissed().subscribe(() => { console.log('Yeah') });

        } else if ('loaded' in data) {
          data = data as HttpProgressEvent;
          this.progressState = Math.round(data.loaded / data.total) * 50
        }
      })
    }, (error) => {
      this.progressState = 100;
      this.progressColor = 'warn';
      this.snackBar.open(`Errore nel salvataggio`, '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 5000 })
            .afterDismissed().subscribe(() => { console.log('Yeah') });

    });
  }

  uploadImage() {

  }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.fileBlob = file;
    }
  }

}

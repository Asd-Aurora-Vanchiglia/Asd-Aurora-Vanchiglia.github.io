import { HttpProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Editor } from 'ngx-editor';
import { GroupViewDto } from 'src/app/api/models';
import { GroupControllerService, ImageControllerService } from 'src/app/api/services';

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
  previewImageUrl= null;
  private __isNew =  true;
  private __gropuId = null;

  get title(): string {
    return this.__isNew ? `Nuova squadra o gruppo` : 'Modifica squadra/gruppo';
  }


  get url_preview(): string {
    const s: string = this.groupForm?.get('title')?.value;
    return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/group/${s.toLowerCase().trim().replace(/ /g, '-')}`;
  }

  constructor(private formBuilder: FormBuilder, private groupService: GroupControllerService, private snackBar: MatSnackBar, private route: ActivatedRoute, private imageService: ImageControllerService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      let group: GroupViewDto = data.group;
      console.log('Loaded group: ', group);
      this.initForm(group);
      this.__isNew = !group;
      this.previewImageUrl = group ? this.imageService.getImageUrlFromId(group.coverImageId) : null;
      this.__gropuId = group?.id;
    });

  }

  showIconSeletcion(event: any){
    console.log("Event: ", event);
    this.groupForm.get('icon')?.setValue(event);
  }

  initForm(group?: GroupViewDto | undefined) {
    this.groupForm = this.formBuilder.group( group ?
      {
        title: group?.title,
        onMenu: group?.onMenu,
        description: group?.description,
        icon: group?.icon
      }:
      {
        title: '',
        onMenu: false,
        description: '',
        icon: ''
      }
    );
  }

  save() {

    this.progressColor = null;
    this.progressState = 0;


    if (this.__isNew){
      this.groupService.createGroup({ body: this.groupForm.value })
        .subscribe((group) => this.saveResponseHandler(group), (error) => this.saveErrorHandler(error));
    } else {
      this.groupService.updateGroup({ id: this.__gropuId, body: this.groupForm.value })
        .subscribe((group) => this.saveResponseHandler(group), (error) => this.saveErrorHandler(error));
    }
  }

  saveResponseHandler(group) {
    this.progressState = 50;

    if(this.fileBlob){
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
    } 
    else {
      this.progressState = 100;
      this.progressColor = 'green';
      this.snackBar.open(`Gruppo ${group.title} salvato`, '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 5000 })
        .afterDismissed().subscribe(() => { console.log('Yeah') });
    }
  }

  saveErrorHandler(error) {
    this.progressState = 100;
    this.progressColor = 'warn';
    this.snackBar.open(`Errore nel salvataggio`, '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 5000 })
          .afterDismissed().subscribe(() => { console.log('Yeah') });
  }

  uploadImage() {

  }

  onFileSelected(event) {
    const reader = new FileReader();

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.fileBlob = file;

      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.previewImageUrl = reader.result as string;
      }
    }
  }

}

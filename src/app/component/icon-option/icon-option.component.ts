import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-icon-option',
  templateUrl: './icon-option.component.html',
  styleUrls: ['./icon-option.component.scss']
})
export class IconOptionComponent {

  @Input()
  icon_label: string;

  @Input()
  selection!: string;

  @Output()
  onPress: EventEmitter<string>;


  constructor(){
    this.onPress = new EventEmitter<string>();
  }


  isSelected(): boolean {
    return this.selection && this.selection == this.icon_label;
  }

  select(){
    this.onPress.emit(this.icon_label);
  }

}

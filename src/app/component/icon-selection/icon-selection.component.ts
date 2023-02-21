import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-icon-selection',
  templateUrl: './icon-selection.component.html',
  styleUrls: ['./icon-selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: IconSelectionComponent
    }
  ]
})
export class IconSelectionComponent implements ControlValueAccessor {

  icons = ICONS;

  touched = false;
  disabled = false;

  onChange = (quantity) => {};

  onTouched = () => {};

  @Input()
  value!: string

  @Output()
  selected: EventEmitter<string>;

  constructor(){
    this.selected = new EventEmitter<string>();
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }


  select(icon_label: string) {
    this.value = icon_label;
    this.onChange(this.value);
    this.markAsTouched();
    this.selected.emit(this.value);
  }

}

export const ICONS = [
'sports',
'sports_bar',
'sports_baseball',
'sports_basketball',
'sports_cricket',
'sports_esports',
'sports_football',
'sports_golf',
'sports_gymnastics',
'sports_handball',
'sports_hockey',
'sports_kabaddi',
'sports_martial_arts',
'sports_mma',
'sports_motorsports',
'sports_rugby',
'sports_score',
'sports_soccer',
'sports_tennis',
'sports_volleyball'];

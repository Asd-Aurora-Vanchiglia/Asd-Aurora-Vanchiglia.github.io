import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemNotImplementedComponent } from './item-not-implemented.component';

describe('ItemNotImplementedComponent', () => {
  let component: ItemNotImplementedComponent;
  let fixture: ComponentFixture<ItemNotImplementedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNotImplementedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNotImplementedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

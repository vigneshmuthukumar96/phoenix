import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquineListComponent } from './equine-list.component';

describe('EquineListComponent', () => {
  let component: EquineListComponent;
  let fixture: ComponentFixture<EquineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

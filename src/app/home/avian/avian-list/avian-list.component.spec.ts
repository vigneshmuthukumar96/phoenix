import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvianListComponent } from './avian-list.component';

describe('AvianListComponent', () => {
  let component: AvianListComponent;
  let fixture: ComponentFixture<AvianListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

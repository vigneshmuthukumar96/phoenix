import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvianComponent } from './avian.component';

describe('AvianComponent', () => {
  let component: AvianComponent;
  let fixture: ComponentFixture<AvianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

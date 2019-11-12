import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquineComponent } from './equine.component';

describe('EquineComponent', () => {
  let component: EquineComponent;
  let fixture: ComponentFixture<EquineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

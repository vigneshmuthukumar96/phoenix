import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprineOvineComponent } from './caprine-ovine.component';

describe('CaprineOvineComponent', () => {
  let component: CaprineOvineComponent;
  let fixture: ComponentFixture<CaprineOvineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaprineOvineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaprineOvineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

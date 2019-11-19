import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprineOvineListComponent } from './caprine-ovine-list.component';

describe('CaprineOvineListComponent', () => {
  let component: CaprineOvineListComponent;
  let fixture: ComponentFixture<CaprineOvineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaprineOvineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaprineOvineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

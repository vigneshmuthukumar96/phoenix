import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisinfectantComponent } from './disinfectant.component';

describe('DisinfectantComponent', () => {
  let component: DisinfectantComponent;
  let fixture: ComponentFixture<DisinfectantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisinfectantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisinfectantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

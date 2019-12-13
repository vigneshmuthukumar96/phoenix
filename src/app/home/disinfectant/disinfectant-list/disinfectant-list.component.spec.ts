import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisinfectantListComponent } from './disinfectant-list.component';

describe('DisinfectantListComponent', () => {
  let component: DisinfectantListComponent;
  let fixture: ComponentFixture<DisinfectantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisinfectantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisinfectantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

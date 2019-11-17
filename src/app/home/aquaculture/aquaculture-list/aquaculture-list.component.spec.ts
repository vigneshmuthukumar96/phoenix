import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquacultureListComponent } from './aquaculture-list.component';

describe('AquacultureListComponent', () => {
  let component: AquacultureListComponent;
  let fixture: ComponentFixture<AquacultureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquacultureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquacultureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

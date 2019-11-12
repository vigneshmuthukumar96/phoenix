import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovineComponent } from './bovine.component';

describe('BovineComponent', () => {
  let component: BovineComponent;
  let fixture: ComponentFixture<BovineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

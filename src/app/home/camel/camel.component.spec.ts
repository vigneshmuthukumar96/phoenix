import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelComponent } from './camel.component';

describe('CamelComponent', () => {
  let component: CamelComponent;
  let fixture: ComponentFixture<CamelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

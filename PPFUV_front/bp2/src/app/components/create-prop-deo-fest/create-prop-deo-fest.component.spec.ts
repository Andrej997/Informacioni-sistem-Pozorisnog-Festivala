import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropDeoFestComponent } from './create-prop-deo-fest.component';

describe('CreatePropDeoFestComponent', () => {
  let component: CreatePropDeoFestComponent;
  let fixture: ComponentFixture<CreatePropDeoFestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropDeoFestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropDeoFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePredstavaComponent } from './create-predstava.component';

describe('CreatePredstavaComponent', () => {
  let component: CreatePredstavaComponent;
  let fixture: ComponentFixture<CreatePredstavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePredstavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePredstavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

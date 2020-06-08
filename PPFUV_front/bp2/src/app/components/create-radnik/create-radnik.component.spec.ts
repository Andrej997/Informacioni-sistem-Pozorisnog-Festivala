import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRadnikComponent } from './create-radnik.component';

describe('CreateRadnikComponent', () => {
  let component: CreateRadnikComponent;
  let fixture: ComponentFixture<CreateRadnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRadnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

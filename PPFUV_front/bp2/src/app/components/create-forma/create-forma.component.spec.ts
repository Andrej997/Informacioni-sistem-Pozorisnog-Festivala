import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormaComponent } from './create-forma.component';

describe('CreateFormaComponent', () => {
  let component: CreateFormaComponent;
  let fixture: ComponentFixture<CreateFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

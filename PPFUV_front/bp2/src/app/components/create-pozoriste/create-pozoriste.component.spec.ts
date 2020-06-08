import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePozoristeComponent } from './create-pozoriste.component';

describe('CreatePozoristeComponent', () => {
  let component: CreatePozoristeComponent;
  let fixture: ComponentFixture<CreatePozoristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePozoristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePozoristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNagradaComponent } from './create-nagrada.component';

describe('CreateNagradaComponent', () => {
  let component: CreateNagradaComponent;
  let fixture: ComponentFixture<CreateNagradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNagradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNagradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

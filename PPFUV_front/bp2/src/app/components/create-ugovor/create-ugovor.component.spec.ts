import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUgovorComponent } from './create-ugovor.component';

describe('CreateUgovorComponent', () => {
  let component: CreateUgovorComponent;
  let fixture: ComponentFixture<CreateUgovorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUgovorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUgovorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

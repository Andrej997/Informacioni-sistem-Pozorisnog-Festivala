import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRadnikComponent } from './table-radnik.component';

describe('TableRadnikComponent', () => {
  let component: TableRadnikComponent;
  let fixture: ComponentFixture<TableRadnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRadnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

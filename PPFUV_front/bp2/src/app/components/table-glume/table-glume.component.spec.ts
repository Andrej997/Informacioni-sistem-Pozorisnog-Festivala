import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGlumeComponent } from './table-glume.component';

describe('TableGlumeComponent', () => {
  let component: TableGlumeComponent;
  let fixture: ComponentFixture<TableGlumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGlumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGlumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

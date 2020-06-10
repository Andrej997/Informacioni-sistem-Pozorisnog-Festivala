import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSalaComponent } from './table-sala.component';

describe('TableSalaComponent', () => {
  let component: TableSalaComponent;
  let fixture: ComponentFixture<TableSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePredstavaComponent } from './table-predstava.component';

describe('TablePredstavaComponent', () => {
  let component: TablePredstavaComponent;
  let fixture: ComponentFixture<TablePredstavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePredstavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePredstavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

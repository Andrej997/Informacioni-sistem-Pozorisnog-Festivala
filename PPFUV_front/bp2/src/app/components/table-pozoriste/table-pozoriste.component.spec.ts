import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePozoristeComponent } from './table-pozoriste.component';

describe('TablePozoristeComponent', () => {
  let component: TablePozoristeComponent;
  let fixture: ComponentFixture<TablePozoristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePozoristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePozoristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

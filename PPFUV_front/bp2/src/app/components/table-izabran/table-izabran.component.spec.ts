import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIzabranComponent } from './table-izabran.component';

describe('TableIzabranComponent', () => {
  let component: TableIzabranComponent;
  let fixture: ComponentFixture<TableIzabranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableIzabranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIzabranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

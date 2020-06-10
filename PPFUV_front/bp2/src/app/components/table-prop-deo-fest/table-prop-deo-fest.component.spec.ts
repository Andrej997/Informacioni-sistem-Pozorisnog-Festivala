import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePropDeoFestComponent } from './table-prop-deo-fest.component';

describe('TablePropDeoFestComponent', () => {
  let component: TablePropDeoFestComponent;
  let fixture: ComponentFixture<TablePropDeoFestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePropDeoFestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePropDeoFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

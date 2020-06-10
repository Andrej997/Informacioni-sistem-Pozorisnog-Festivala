import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFestivalComponent } from './table-festival.component';

describe('TableFestivalComponent', () => {
  let component: TableFestivalComponent;
  let fixture: ComponentFixture<TableFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFestivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

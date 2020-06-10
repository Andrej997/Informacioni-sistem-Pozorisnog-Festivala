import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormaComponent } from './table-forma.component';

describe('TableFormaComponent', () => {
  let component: TableFormaComponent;
  let fixture: ComponentFixture<TableFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUcesniciComponent } from './table-ucesnici.component';

describe('TableUcesniciComponent', () => {
  let component: TableUcesniciComponent;
  let fixture: ComponentFixture<TableUcesniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUcesniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUcesniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

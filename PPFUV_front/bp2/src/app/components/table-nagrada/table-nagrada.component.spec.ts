import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNagradaComponent } from './table-nagrada.component';

describe('TableNagradaComponent', () => {
  let component: TableNagradaComponent;
  let fixture: ComponentFixture<TableNagradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNagradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNagradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

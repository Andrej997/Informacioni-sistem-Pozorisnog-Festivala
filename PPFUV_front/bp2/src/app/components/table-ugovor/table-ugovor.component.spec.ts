import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUgovorComponent } from './table-ugovor.component';

describe('TableUgovorComponent', () => {
  let component: TableUgovorComponent;
  let fixture: ComponentFixture<TableUgovorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUgovorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUgovorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrgOdbComponent } from './table-org-odb.component';

describe('TableOrgOdbComponent', () => {
  let component: TableOrgOdbComponent;
  let fixture: ComponentFixture<TableOrgOdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrgOdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrgOdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

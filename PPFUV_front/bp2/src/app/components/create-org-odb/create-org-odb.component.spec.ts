import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrgOdbComponent } from './create-org-odb.component';

describe('CreateOrgOdbComponent', () => {
  let component: CreateOrgOdbComponent;
  let fixture: ComponentFixture<CreateOrgOdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrgOdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrgOdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

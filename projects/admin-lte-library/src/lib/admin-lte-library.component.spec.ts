import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLteLibraryComponent } from './admin-lte-library.component';

describe('AdminLteLibraryComponent', () => {
  let component: AdminLteLibraryComponent;
  let fixture: ComponentFixture<AdminLteLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLteLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

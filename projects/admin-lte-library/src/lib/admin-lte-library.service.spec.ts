import { TestBed } from '@angular/core/testing';

import { AdminLteLibraryService } from './admin-lte-library.service';

describe('AdminLteLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminLteLibraryService = TestBed.get(AdminLteLibraryService);
    expect(service).toBeTruthy();
  });
});

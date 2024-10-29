import { TestBed } from '@angular/core/testing';

import { FashionAdminService } from './fashion-admin.service';

describe('FashionAdminService', () => {
  let service: FashionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FashionClientService } from './fashion-client.service';

describe('FashionClientService', () => {
  let service: FashionClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

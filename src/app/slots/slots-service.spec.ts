import { TestBed } from '@angular/core/testing';

import { SlotsService } from '../services/slotService/slots-service';

describe('SlotsService', () => {
  let service: SlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BookAptService } from './book-apt-service';

describe('BookAptService', () => {
  let service: BookAptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

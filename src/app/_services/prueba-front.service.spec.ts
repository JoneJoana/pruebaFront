import { TestBed } from '@angular/core/testing';

import { PruebaFrontService } from './prueba-front.service';

describe('PruebaFrontService', () => {
  let service: PruebaFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

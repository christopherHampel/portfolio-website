import { TestBed } from '@angular/core/testing';

import { InitTranslationServiceService } from './init-translation-service.service';

describe('InitTranslationServiceService', () => {
  let service: InitTranslationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitTranslationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

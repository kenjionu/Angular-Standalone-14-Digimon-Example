import { TestBed } from '@angular/core/testing';

import { DigimonServiceService } from './digimon.service.service';

describe('YugiohServiceService', () => {
  let service: DigimonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

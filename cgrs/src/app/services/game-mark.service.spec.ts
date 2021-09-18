import { TestBed } from '@angular/core/testing';

import { GameMarkService } from './game-mark.service';

describe('GameMarkService', () => {
  let service: GameMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

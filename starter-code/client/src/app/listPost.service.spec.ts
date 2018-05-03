/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListPostService } from './listPost.service';

describe('Service: ListPost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPostService]
    });
  });

  it('should ...', inject([ListPostService], (service: ListPostService) => {
    expect(service).toBeTruthy();
  }));
});

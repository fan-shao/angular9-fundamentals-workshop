import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
    imports: [HttpClient];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

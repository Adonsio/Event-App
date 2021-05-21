import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('Event Service', () => {
  let service: EventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService],
    });

    // inject the service
    service = TestBed.get(EventService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should get the data successful', () => {
      service.getEvent(1).subscribe((data: any) => {
        expect(data.name).toBe('John Doe\'s Event');
      });

      const req = httpMock.expectOne(`http://localhost/api/events/1`, 'call to api');
      expect(req.request.method).toBe('GET');


      req.flush({
        name: 'John Doe\'s Event'
      });

      httpMock.verify();
    });
  });

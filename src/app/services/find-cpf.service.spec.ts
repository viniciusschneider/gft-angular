import { TestBed } from '@angular/core/testing';
import { FindCpfService } from './find-cpf.service';

describe('FindCpfService', () => {
  let service: FindCpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return falsy', (done: DoneFn) => {
    service.findCpf('11122233344').subscribe({
      next: data => {
        expect(data).toBeFalsy();
        done()
      },
      error: done.fail
    })
  });

  it('should return truthy', (done: DoneFn) => {
    service.findCpf('63895000094').subscribe({
      next: data => {
        expect(data).toBeTruthy();
        done()
      },
      error: done.fail
    })
  });
});

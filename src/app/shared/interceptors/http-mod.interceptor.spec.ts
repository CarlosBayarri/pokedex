import { TestBed } from '@angular/core/testing';

import { HttpModInterceptor } from './http-mod.interceptor';

describe('HttpModInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpModInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpModInterceptor = TestBed.inject(HttpModInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationPrefService } from './notification-pref.service';

describe('Service: NotificationPref', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationPrefService]
    });
  });

  it('should ...', inject([NotificationPrefService], (service: NotificationPrefService) => {
    expect(service).toBeTruthy();
  }));
});

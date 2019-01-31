import { TestBed } from '@angular/core/testing';
import { PingControl } from './ping-control';

describe('Ping-Controle', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const control = new PingControl({value: 'My'});
    expect(control).toBeTruthy();
  });
});

import { Server } from './server';

describe('server', () => {
  it('should return 123 when send', () => {
    expect(Server.send()).toEqual('123');
  });
});
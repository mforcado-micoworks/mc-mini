import { VerifyLineSignatureMiddleware } from './verify-line-signature.middleware';

describe('VerifyLineSignatureMiddleware', () => {
  it('should be defined', () => {
    expect(new VerifyLineSignatureMiddleware()).toBeDefined();
  });
});

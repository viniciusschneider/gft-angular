import { isValidCPF } from '.';

describe('CustomValidators', () => {
  it('should validated CPF as true', () => {
    expect(isValidCPF('63895000094')).toBe(true);
  });

  it('should validated CPF as false', () => {
    expect(isValidCPF('11122233344')).toBe(false);
  });
});

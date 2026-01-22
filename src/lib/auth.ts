// Obfuscated access code - split and encoded for basic security
// Note: Client-side obfuscation is not truly secure, but adds a layer of difficulty
const _0x1a = ['ZlE5IVp4QEEySyR3UDdlI01eZFI4c0wlSGNZJlZKbSpVK040Qn5UPUU2cS1XYV9yWClrM1NdNUMwe0k/Tw=='];
const _0x2b = (i: number) => atob(_0x1a[i]);

export const verifyAccessCode = (input: string): boolean => {
  try {
    const expected = _0x2b(0);
    return input === expected;
  } catch {
    return false;
  }
};

export const AUTH_STORAGE_KEY = 'llm_security_lab_auth';

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'authenticated';
};

export const setAuthenticated = (): void => {
  sessionStorage.setItem(AUTH_STORAGE_KEY, 'authenticated');
};

export const clearAuthentication = (): void => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
};

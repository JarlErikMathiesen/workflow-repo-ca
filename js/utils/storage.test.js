import { expect, describe, it, beforeEach } from 'vitest';
import { getUsername, saveUser, clearStorage } from './storage.js';

describe('Storage functions', () => {
  beforeEach(() => {
    clearStorage();
  });

  it('check if saving and retrieving username from localStorage returns name', () => {
    const user = { name: 'Ronny' };
    saveUser(user);

    const result = getUsername();

    expect(result).toBe(user.name);
  });

  it('check that it returns null when user is empty', () => {
    const result = getUsername();

    expect(result).toBe(null);
  });
});

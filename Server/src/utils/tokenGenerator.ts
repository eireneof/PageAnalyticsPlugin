import crypto from 'crypto';

export class TokenGenerator {
  /**
   * Generates a random token with the specified length.
   * @param byteLength Length of the token in bytes (default: 32).
   * @returns A hexadecimal token as a string.
   */
  static generate(byteLength: number = 32): string {
    return crypto.randomBytes(byteLength).toString('hex');
  }
}

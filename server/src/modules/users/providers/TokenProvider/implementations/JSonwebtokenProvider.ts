import { sign } from 'jsonwebtoken';

import ITokenOptions from '../models/ITokenOptions';
import ITokenProvider from '../models/ITokenProvider';

export default class JSonwebtokenProvider implements ITokenProvider {
  generateToken(
    payload: object,
    secret: string,
    options: ITokenOptions,
  ): string {
    return sign(payload, secret, options);
  }
}

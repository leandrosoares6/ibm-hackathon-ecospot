import ITokenOptions from '../models/ITokenOptions';
import ITokenProvider from '../models/ITokenProvider';

export default class FakeTokenProvider implements ITokenProvider {
  generateToken(___: object, __: string, _: ITokenOptions): string {
    return '123456';
  }
}

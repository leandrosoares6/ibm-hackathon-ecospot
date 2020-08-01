import ITokenOptions from './ITokenOptions';

export default interface ITokenProvider {
  generateToken(
    payload: object,
    secret: string,
    options: ITokenOptions,
  ): string;
}

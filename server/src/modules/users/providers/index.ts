import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

import ITokenProvider from './TokenProvider/models/ITokenProvider';
import JSonwebtokenProvider from './TokenProvider/implementations/JSonwebtokenProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

container.registerSingleton<ITokenProvider>(
  'TokenProvider',
  JSonwebtokenProvider,
);

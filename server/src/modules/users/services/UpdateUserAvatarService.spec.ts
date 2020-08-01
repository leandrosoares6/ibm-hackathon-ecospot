import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatar: UpdateUserAvatarService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update user avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'profile.png',
    });

    expect(user.avatar).toBe('profile.png');
  });

  it('should not be able to update with non-existent user', async () => {
    await expect(
      updateUserAvatar.execute({
        user_id: '123',
        avatarFilename: 'profile.png',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete previous avatar before update', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'profile.png',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'profile2.png',
    });

    expect(deleteFile).toHaveBeenCalledWith('profile.png');
    expect(user.avatar).toBe('profile2.png');
  });
});

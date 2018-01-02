using System.Collections.Generic;

namespace EaForgeApi.Users
{
    public class UsersService
    {
        private readonly UsersRepository _userRepo;

        public UsersService(UsersRepository userRepo)
        {
            _userRepo = userRepo;
        }

        public UsersEntity GetById(int Id)
        {
            const int eafAccountId = 1;
            return _userRepo.GetUserById(Id, eafAccountId);
        }

        public void Create(UsersEntity user)
        {
            var insert = _userRepo.Insert(user);
        }
    }
}

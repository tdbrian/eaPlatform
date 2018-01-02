namespace EaForgeApi.Organizations
{
    public class OrganizationsService
    {
        private readonly OrganizationsRepository _userRepo;

        public OrganizationsService(OrganizationsRepository userRepo)
        {
            _userRepo = userRepo;
        }

        public OrganizationEntity Get(int Id)
        {
            const int eafAccountId = 1;
            return _userRepo.GetOrganizationById(Id, eafAccountId);
        }

        public void Create(OrganizationEntity user)
        {
            var insert = _userRepo.Insert(user);
        }
    }
}

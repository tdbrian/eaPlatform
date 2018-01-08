using System.Collections.Generic;

namespace EaForgeApi.Applications
{
    public interface IApplicationRepository
    {
        int Delete(ApplicationEntity application);
        List<ApplicationEntity> GetAccountAll(int eafAccountId);
        ApplicationEntity GetById(int id, int eafAccountId);
        int Insert(ApplicationEntity application);
        int Update(ApplicationEntity application);
    }
}
using System;
using System.Collections.Generic;

namespace EaForgeApi.Applications
{
    public class ApplicationService
    {
        private readonly ApplicationRepository _applicationRepo;

        public ApplicationService(ApplicationRepository applicationRepo)
        {
            _applicationRepo = applicationRepo;
        }

        public IList<ApplicationEntity> GetAll()
        {
            const int eafAccountId = 1;
            return _applicationRepo.GetAccountAll(eafAccountId);
        }

        public ApplicationEntity GetById(int id)
        {
            const int eafAccountId = 1;
            return _applicationRepo.GetById(id, eafAccountId);
        }

        public void Create(ApplicationEntity application)
        {
            application.EafAccount = 1;
            application.IsDeleted = false;
            SetDescriptions(application);
            var insertCount = _applicationRepo.Insert(application);
            if (insertCount == 0) throw new Exception("Application was not created");
        }

        public void Update(ApplicationEntity application)
        {
            application.EafAccount = 1;
            application.IsDeleted = false;
            SetDescriptions(application);
            var updateCount = _applicationRepo.Update(application);
            if (updateCount == 0) throw new Exception("Application was not updated");
        }

        private static void SetDescriptions(ApplicationEntity application)
        {
            if (application.LongDescription == null)
            {
                application.LongDescription = "";
            }
            else if (application.LongDescription.Length > 250)
            {
                application.ShortDescription = application.LongDescription?.Substring(0, 250);
            }
            else
            {
                application.ShortDescription = application.LongDescription;
            }
        }

        public void Delete(ApplicationEntity application)
        {
            application.EafAccount = 1;
            var updateCount = _applicationRepo.Delete(application);
            if (updateCount == 0) throw new Exception("Application was not deleted");
        }
    }
}

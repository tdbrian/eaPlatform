using System;
using System.Collections.Generic;

namespace EaForgeApi.Endpoints
{
    public class EndpointsService
    {
        private readonly EndpointsRepository _endpointRepo;

        public EndpointsService(EndpointsRepository endpointRepo)
        {
            _endpointRepo = endpointRepo;
        }

        public IList<EndpointEntity> GetAll(int applicationId)
        {
            return _endpointRepo.GetApplicationAll(applicationId);
        }

        public EndpointEntity GetById(int id)
        {
            return _endpointRepo.GetById(id);
        }

        public void Create(EndpointEntity endpoint)
        {
            endpoint.IsDeleted = false;
            var insertCount = _endpointRepo.Insert(endpoint);
            if (insertCount == 0) throw new Exception("endpoint was not created");
        }

        public void Update(EndpointEntity endpoint)
        {
            endpoint.IsDeleted = false;
            var updateCount = _endpointRepo.Update(endpoint);
            if (updateCount == 0) throw new Exception("endpoint was not updated");
        }

        public void Delete(EndpointEntity endpoint)
        {
            var updateCount = _endpointRepo.Delete(endpoint);
            if (updateCount == 0) throw new Exception("endpoint was not deleted");
        }
    }
}

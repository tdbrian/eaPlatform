using System;
using System.Collections.Generic;

namespace EaForgeApi.Endpoints
{
    public class EndpointsService
    {
        private readonly EndpointsRepository _dataTypesRepo;

        public EndpointsService(EndpointsRepository endpointRepo)
        {
            _dataTypesRepo = endpointRepo;
        }

        public IList<EndpointEntity> GetAll(int applicationId)
        {
            return _dataTypesRepo.GetApplicationAll(applicationId);
        }

        public EndpointEntity GetById(int id)
        {
            return _dataTypesRepo.GetById(id);
        }

        public void Create(EndpointEntity endpoint)
        {
            endpoint.IsDeleted = false;
            var insertCount = _dataTypesRepo.Insert(endpoint);
            if (insertCount == 0) throw new Exception("endpoint was not created");
        }

        public void Update(EndpointEntity endpoint)
        {
            endpoint.IsDeleted = false;
            var updateCount = _dataTypesRepo.Update(endpoint);
            if (updateCount == 0) throw new Exception("endpoint was not updated");
        }

        public void Delete(EndpointEntity endpoint)
        {
            var updateCount = _dataTypesRepo.Delete(endpoint);
            if (updateCount == 0) throw new Exception("endpoint was not deleted");
        }
    }
}

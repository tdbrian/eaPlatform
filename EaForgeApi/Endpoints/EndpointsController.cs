using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EaForgeApi.Endpoints
{
    [Route("api/endpoints")]
    public class EndpointsController : Controller
    {
        private readonly EndpointsService _endpointService;

        public EndpointsController(EndpointsService endpointService)
        {
            _endpointService = endpointService;
        }

        [HttpGet("application/{id}")]
        public IEnumerable<EndpointEntity> GetByApplication(int applicationId)
        {
            return _endpointService.GetAll(applicationId);
        }

        [HttpGet("{id}")]
        public EndpointEntity Get(int id)
        {
            return _endpointService.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody]EndpointEntity endpoint)
        {
            _endpointService.Create(endpoint);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]EndpointEntity endpoint)
        {
            _endpointService.Update(endpoint);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var endpoint = _endpointService.GetById(id);
            _endpointService.Delete(endpoint);
        }
    }
}

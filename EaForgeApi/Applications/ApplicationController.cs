using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EaForgeApi.Applications
{
    [Route("api/applications")]
    public class ApplicationsController : Controller
    {
        private readonly ApplicationService _applicationService;

        public ApplicationsController(ApplicationService applicationService)
        {
            _applicationService = applicationService;
        }

        [HttpGet]
        public IEnumerable<ApplicationEntity> Get()
        {
            return _applicationService.GetAll();
        }

        [HttpGet("{id}")]
        public ApplicationEntity Get(int id)
        {
            return _applicationService.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody]ApplicationEntity application)
        {
            _applicationService.Create(application);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ApplicationEntity application)
        {
            _applicationService.Update(application);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var application = _applicationService.GetById(id);
            _applicationService.Delete(application);
        }
    }
}

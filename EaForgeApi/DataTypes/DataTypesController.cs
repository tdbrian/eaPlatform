using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EaForgeApi.DataTypes
{
    [Route("api/dataTypes")]
    public class DataTypesController : Controller
    {
        private readonly DataTypesService _dataTypeService;

        public DataTypesController(DataTypesService dataTypeService)
        {
            _dataTypeService = dataTypeService;
        }

        [HttpGet]
        public IEnumerable<DataTypesEntity> GetAll()
        {
            return _dataTypeService.GetAll();
        }

        [HttpGet("{id}")]
        public DataTypesEntity Get([FromRoute]int id)
        {
            return _dataTypeService.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody]DataTypesEntity dataType)
        {
            _dataTypeService.Create(dataType);
        }

        [HttpPut("{id}")]
        public void Put([FromRoute]int id, [FromBody]DataTypesEntity dataType)
        {
            _dataTypeService.Update(dataType);
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute]int id)
        {
            var dataType = _dataTypeService.GetById(id);
            _dataTypeService.Delete(dataType);
        }
    }
}

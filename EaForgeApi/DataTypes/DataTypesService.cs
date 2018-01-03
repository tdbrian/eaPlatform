using System;
using System.Collections.Generic;

namespace EaForgeApi.DataTypes
{
    public class DataTypesService
    {
        private readonly DataTypesRepository _dataTypesRepo;

        public DataTypesService(DataTypesRepository dataTypeRepo)
        {
            _dataTypesRepo = dataTypeRepo;
        }

        public IList<DataTypesEntity> GetAll()
        {
            return _dataTypesRepo.GetAll();
        }

        public DataTypesEntity GetById(int id)
        {
            return _dataTypesRepo.GetById(id);
        }

        public void Create(DataTypesEntity dataType)
        {
            dataType.IsDeleted = false;
            var insertCount = _dataTypesRepo.Insert(dataType);
            if (insertCount == 0) throw new Exception("dataType was not created");
        }

        public void Update(DataTypesEntity dataType)
        {
            dataType.IsDeleted = false;
            var updateCount = _dataTypesRepo.Update(dataType);
            if (updateCount == 0) throw new Exception("dataType was not updated");
        }

        public void Delete(DataTypesEntity dataType)
        {
            var updateCount = _dataTypesRepo.Delete(dataType);
            if (updateCount == 0) throw new Exception("dataType was not deleted");
        }
    }
}

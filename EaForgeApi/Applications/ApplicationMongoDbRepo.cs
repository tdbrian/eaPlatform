using System;
using System.Collections.Generic;
using MongoDB.Driver;

namespace EaForgeApi.Applications
{
    public class ApplicationMongoDbRepo : IApplicationRepository
    {
        private readonly MongoClient _client;
        private IMongoCollection<ApplicationEntity> _collection;

        public ApplicationMongoDbRepo(MongoClient client)
        {
            _client = client;
            var db = _client.GetDatabase("eaplatform");
            _collection = db.GetCollection<ApplicationEntity>("applications");
        }

        public List<ApplicationEntity> GetAccountAll(int eafAccountId)
        {
            throw new NotImplementedException();
        }

        public ApplicationEntity GetById(int id, int eafAccountId)
        {
            throw new NotImplementedException();
        }

        public int Insert(ApplicationEntity application)
        {
            throw new NotImplementedException();
        }

        public int Update(ApplicationEntity application)
        {
            throw new NotImplementedException();
        }
        public int Delete(ApplicationEntity application)
        {
            throw new NotImplementedException();
        }
    }
}

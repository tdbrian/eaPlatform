using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace EaForgeApi.Endpoints
{
    public class EndpointsRepository
    {
        private readonly string _config;

        public EndpointsRepository(IConfiguration configuration)
        {
            _config = configuration.GetConnectionString("CoreDb");
        }

        public List<EndpointEntity> GetApplicationAll(int applicationId)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { ApplicationId = applicationId };
                return db.Query<EndpointEntity>("Select Id, Name, Description, Version, Path, RestType, ApplicationId From Endpoints " +
                 "WHERE IsDeleted = 0 AND ApplicationId = @ApplicationId", query).ToList();
            }
        }

        public EndpointEntity GetById(int id)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { Id = id };
                return db
                    .Query<EndpointEntity>("Select Id, Name, Description, Version, Path, RestType, ApplicationId From Endpoints " +
                                           "WHERE IsDeleted = 0 AND Id = @Id", query)
                    .FirstOrDefault();
            }
        }

        public int Insert(EndpointEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "INSERT INTO Endpoints (Name, Description, Version, Path, RestType, ApplicationId, IsDeleted) " +
                                   "VALUES(@Name, @Description, @Version, @Path, @RestType, @ApplicationId, 0)";
                return db.Execute(sql, entpoint);
            }
        }

        public int Update(EndpointEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE Endpoints SET Name = @Name, Description = @Description, Version = @Version, Path = @Path, RestType = @RestType " +
                                   "WHERE Id = @Id AND EndpointId = @EndpointId";
                return db.Execute(sql, entpoint);
            }
        }

        public int Delete(EndpointEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE Endpoints SET IsDeleted = 1 WHERE Id = @Id";
                return db.Execute(sql, entpoint);
            }
        }
    }
}

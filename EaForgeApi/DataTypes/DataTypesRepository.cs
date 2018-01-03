using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace EaForgeApi.DataTypes
{
    public class DataTypesRepository
    {
        private readonly string _config;

        public DataTypesRepository(IConfiguration configuration)
        {
            _config = configuration.GetConnectionString("CoreDb");
        }

        public List<DataTypesEntity> GetAll()
        {
            using (var db = new SqlConnection(_config))
            {
                const int eafAccountId = 1;
                var query = new { EafAccountId = eafAccountId };
                return db.Query<DataTypesEntity>("Select Id, Name, Description, Type, UsedForSearch, DefaultValue From DataTypes " +
                    "WHERE IsDeleted = 0 AND EafAccountId = @EafAccountId", query).ToList();
            }
        }

        public DataTypesEntity GetById(int id)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { Id = id };
                return db
                    .Query<DataTypesEntity>("Select Id, Name, Description, Type, UsedForSearch, DefaultValue From DataTypes " +
                                           "WHERE IsDeleted = 0 AND Id = @Id", query)
                    .FirstOrDefault();
            }
        }

        public int Insert(DataTypesEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "INSERT INTO DataTypes (Name, Description, Type, UsedForSearch, DefaultValue, EafAccountId, IsDeleted) " +
                                   "VALUES(@Name, @Description, @Type, @UsedForSearch, @DefaultValue, @EafAccountId, 0)";
                return db.Execute(sql, entpoint);
            }
        }

        public int Update(DataTypesEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE DataTypes SET Name = @Name, Description = @Description, Type = @Type, UsedForSearch = @UsedForSearch, DefaultValue = @DefaultValue " +
                                   "WHERE Id = @Id";
                return db.Execute(sql, entpoint);
            }
        }

        public int Delete(DataTypesEntity entpoint)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE DataTypes SET IsDeleted = 1 WHERE Id = @Id";
                return db.Execute(sql, entpoint);
            }
        }
    }
}

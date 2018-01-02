using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace EaForgeApi.Applications
{
    public class ApplicationRepository
    {
        private readonly string _config;

        public ApplicationRepository(IConfiguration configuration)
        {
            _config = configuration.GetConnectionString("CoreDb");
        }

        public List<ApplicationEntity> GetAccountAll(int eafAccountId)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { EafAccount = eafAccountId };
                return db
                    .Query<ApplicationEntity>("Select Id, Name, ShortDescription, LongDescription From Applications " +
                                              "WHERE IsDeleted = 0 AND EafAccount = @EafAccount", query).ToList();
            }
        }

        public ApplicationEntity GetById(int id, int eafAccountId)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { EafAccount = eafAccountId, Id = id };
                return db
                    .Query<ApplicationEntity>("Select Id, Name, ShortDescription, LongDescription From Applications WHERE IsDeleted = 0 AND EafAccount = @EafAccount AND Id = @Id", query)
                    .FirstOrDefault();
            }
        }

        public int Insert(ApplicationEntity application)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "INSERT INTO Applications (Name, EafAccount, LongDescription, ShortDescription, IsDeleted) " +
                                   "VALUES(@Name, @EafAccount, @LongDescription, @ShortDescription, 0)";
                return db.Execute(sql, application);
            }
        }

        public int Update(ApplicationEntity application)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE Applications SET Name = @Name, LongDescription = @LongDescription, ShortDescription = @ShortDescription WHERE Id = @Id AND EafAccount = @EafAccount";
                return db.Execute(sql, application);
            }
        }

        public int Delete(ApplicationEntity application)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "UPDATE Applications SET IsDeleted = 1 WHERE Id = @Id AND EafAccount = @EafAccount";
                return db.Execute(sql, application);
            }
        }
    }
}

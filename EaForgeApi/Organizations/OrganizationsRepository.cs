using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace EaForgeApi.Organizations
{
    public class OrganizationsRepository
    {
        private readonly string _config;

        public OrganizationsRepository(IConfiguration configuration)
        {
            _config = configuration.GetConnectionString("CoreDb");
        }

        public OrganizationEntity GetOrganizationById(int id, int eafAccountId)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { EafAccount = eafAccountId, Id = id };
                return db.Query<OrganizationEntity>("Select Id, Name From Users " +
                                            "WHERE IsDeleted = false AND EafAccount = @EafAccount AND Id = @Id", query).FirstOrDefault();
            }
        }

        public int Insert(OrganizationEntity organization)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "INSERT INTO Users (Name, EafAccount) VALUES(@Name, @EafAccount)";
                return db.Execute(sql, organization);
            }
        }
    }
}

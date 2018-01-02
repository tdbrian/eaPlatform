using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace EaForgeApi.Users
{
    public class UsersRepository
    {
        private readonly string _config;

        public UsersRepository(IConfiguration configuration)
        {
            _config = configuration.GetConnectionString("CoreDb");
        }

        public UsersEntity GetUserById(int id, int eafAccountId)
        {
            using (var db = new SqlConnection(_config))
            {
                var query = new { EafAccount = eafAccountId, Id = id };
                return db.Query<UsersEntity>("Select FirstName, LastName, Email, UserType, OrganizationId From Users " +
                                            "WHERE IsDeleted = false AND EafAccount = @EafAccount AND Id = @Id", query).FirstOrDefault();
            }
        }

        public int Insert(UsersEntity user)
        {
            using (var db = new SqlConnection(_config))
            {
                const string sql = "INSERT INTO Users (FirstName, LastName, Email, UserType, EafAccount, OrganizationId) " +
                                   "VALUES(@FirstName, @LastName, @Email, @UserType, @EafAccount, @OrganizationId)";
                return db.Execute(sql, user);
            }
        }
    }
}

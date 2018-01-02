using System;

namespace EaForgeApi.Users
{
    public class UsersEntity
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string UserType { get; set; }

        public int EafAccount { get; set; }

        public bool SelfCreated { get; set; }

        public int OrganizationId { get; set; }

        public bool IsDeleted { get; set; }
    }
}

namespace EaForgeApi.Organizations
{
    public class OrganizationEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int EafAccount { get; set; }

        public bool IsDeleted { get; set; }
    }
}

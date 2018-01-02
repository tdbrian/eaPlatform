namespace EaForgeApi.DataTypes
{
    public class DataTypesEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public bool UsedForSearch { get; set; }

        public string DefaultValue { get; set; }

        public bool IsDeleted { get; set; }

        public int EafAccountId { get; set; }
    }
}

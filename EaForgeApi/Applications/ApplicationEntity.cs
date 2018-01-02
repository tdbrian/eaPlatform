namespace EaForgeApi.Applications
{
    public class ApplicationEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ShortDescription { get; set; }

        public string LongDescription { get; set; }

        public bool IsDeleted { get; set; }
        
        public int EafAccount { get; set; }
    }
}

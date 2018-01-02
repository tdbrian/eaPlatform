namespace EaForgeApi.Endpoints
{
    public class EndpointEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Version { get; set; }

        public string Path { get; set; }

        public string RestType { get; set; }

        public bool IsDeleted { get; set; }
        
        public int ApplicationId { get; set; }
    }
}

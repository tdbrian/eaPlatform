using EaForgeApi.Applications;
using EaForgeApi.Endpoints;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Swashbuckle.AspNetCore.Swagger;

namespace EaForgeApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "EA Forge API", Version = "v1" });
            });

            services.AddSingleton(new MongoClient(Configuration.GetConnectionString("MongoDb")));
            services.AddTransient<ApplicationRepository>();
            services.AddTransient<ApplicationService>();
            services.AddTransient<EndpointsRepository>();
            services.AddTransient<EndpointsService>();
            services.AddTransient<IApplicationRepository, ApplicationMongoDbRepo>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials());

            app.UseMvc();
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "EA Forge API");
            });
        }
    }
}

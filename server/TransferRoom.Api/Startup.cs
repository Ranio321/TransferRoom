using TransferRoom.Api.ErrorHandling;
using TransferRoom.Api.Services.Clients;

namespace TransferRoom.Api;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddHttpClient<IPremierLeagueClient, PremierLeagueClient>();

        services.AddMemoryCache();
        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddExceptionHandler<InvalidResponseCodeExceptionHandler>();
        services.AddExceptionHandler<GlobalExceptionHandler>();
        services.AddProblemDetails();

        services.AddCors(options =>
        {
            options.AddDefaultPolicy(
                builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
    {
        app.UseCors();

        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseRouting();
        app.UseExceptionHandler();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
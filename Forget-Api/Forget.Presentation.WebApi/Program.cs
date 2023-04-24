using Forget.Core.Application;
using Forget.Infrastructure.Identity;
using Forget.Infrastructure.Persistence;
using Forget.Infrastructure.Shared;
using Forget.Presentation.WebApi;
using Forget.Presentation.WebApi.Extensions;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(opt => {
  opt.Filters.Add(new ProducesAttribute("application/json"));
}).ConfigureApiBehaviorOptions(opt => {
  opt.SuppressInferBindingSourcesForParameters = true;
  opt.SuppressMapClientErrors = false;
});

builder.Services.AddPersistenceInfrastructure(builder.Configuration);
builder.Services.AddIdentityInfrastructureForApi(builder.Configuration);
builder.Services.AddSharedInfrastructure(builder.Configuration);
builder.Services.AddApplicationServices();
builder.Services.AddApiControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHealthChecks();
builder.Services.AddSwaggerExtension();
builder.Services.AddDistributedMemoryCache();

builder.Services.AddAuthorization(opt => {
  opt.AddPolicy("AdminOrDev", policy => policy.RequireRole("Dev", "Admin"));
  opt.AddPolicy("Developer", policy => policy.RequireRole("Dev"));
  opt.AddPolicy("Administrator", policy => policy.RequireRole("Admin"));
});

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.UseSwaggerExtension();
app.UseErrorHandlingMiddleware();
app.UseHealthChecks("/health");

app.UseEndpoints(endpoints => {
  endpoints.MapControllers();
});

app.UseCors("CorsPolicy");

app.Run();

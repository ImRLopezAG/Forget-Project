using Forget.Core.Application;
using Forget.Infrastructure.Identity;
using Forget.Infrastructure.Identity.Entities;
using Forget.Infrastructure.Identity.Seeds;
using Forget.Infrastructure.Persistence;
using Forget.Infrastructure.Shared;
using Forget.Presentation.WebApi;
using Forget.Presentation.WebApi.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(opt =>
{
  opt.Filters.Add(new ProducesAttribute("application/json"));
}).ConfigureApiBehaviorOptions(opt =>
{
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
builder.Services.AddCorsConfig();

builder.Services.AddAuthorization(opt =>
{
  opt.AddPolicy("AdminOrDev", policy => policy.RequireRole("Dev", "Admin"));
  opt.AddPolicy("Developer", policy => policy.RequireRole("Dev"));
  opt.AddPolicy("Administrator", policy => policy.RequireRole("Admin"));
});

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope()) {
  var services = scope.ServiceProvider;

  try {
    var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
    var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

    await DefaultRoles.SeedAsync(userManager, roleManager);
    await DefaultAdminUser.SeedAsync(userManager, roleManager);
    await DefaultDevUser.SeedAsync(userManager, roleManager);
  } catch {

  }
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("My_Cors");

app.UseAuthentication();
app.UseAuthorization();
app.UseSwaggerExtension();
app.UseErrorHandlingMiddleware();
app.UseHealthChecks("/health");

app.UseEndpoints(endpoints =>
{
  endpoints.MapControllers();
});


app.Run();

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Domain;
using Forget.Core.Domain.Core;
using Microsoft.EntityFrameworkCore;

namespace Forget.Infrastructure.Persistence.Context;

public class ForgetContext : DbContext
{
  public ForgetContext(DbContextOptions<ForgetContext> options) : base(options) { }

  public DbSet<Product> Products { get; set; } = null!;
  public DbSet<Category> Categories { get; set; } = null!;
  public DbSet<Photo> Photos { get; set; } = null!;

  public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new()) {
    foreach (var entry in ChangeTracker.Entries<BaseEntity>())
      switch (entry.State) {
        case EntityState.Added:
          entry.Entity.Id = Guid.NewGuid().ToString();
          entry.Entity.CreatedAt = DateTime.Now;
          break;
        case EntityState.Modified:
          entry.Entity.UpdatedAt = DateTime.Now;
          break;
      }
    return base.SaveChangesAsync(cancellationToken);
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder){
    #region Tables
    modelBuilder.Entity<Product>().ToTable("Products");
    modelBuilder.Entity<Category>().ToTable("Categories");
    modelBuilder.Entity<Photo>().ToTable("Photos");
    #endregion

    #region Primary Keys
    modelBuilder.Entity<Product>().HasKey(p => p.Id);
    modelBuilder.Entity<Category>().HasKey(c => c.Id);
    modelBuilder.Entity<Photo>().HasKey(p => p.Id);
    #endregion

    #region Foreign Keys
    modelBuilder.Entity<Product>()
      .HasOne(p => p.Category)
      .WithMany(c => c.Products)
      .HasForeignKey(p => p.CategoryId);

    modelBuilder.Entity<Photo>()
      .HasOne(p => p.Product)
      .WithMany(p => p.Photos)
      .HasForeignKey(p => p.ProductId);
    #endregion
  }
}
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MDBk.Models;

public partial class MdbkContext : DbContext
{
    public MdbkContext()
    {
    }

    public MdbkContext(DbContextOptions<MdbkContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Usuario> Usuarios { get; set; }

   

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.Property(e => e.Apellido).HasMaxLength(50);
            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.FechaCreacion).HasColumnType("date");
            entity.Property(e => e.Nombre).HasMaxLength(50);
            entity.Property(e => e.Password).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

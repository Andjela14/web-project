﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using apiKafic.Models;

namespace apiKafic.Migrations
{
    [DbContext(typeof(KaficContext))]
    [Migration("20210327122912_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.4")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("apiKafic.Models.Kafic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("N")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id");

                    b.ToTable("Kafic");
                });

            modelBuilder.Entity("apiKafic.Models.Porudzbina", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Broj")
                        .HasColumnType("int");

                    b.Property<int>("StoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("StoId")
                        .IsUnique();

                    b.ToTable("Porudzbine");
                });

            modelBuilder.Entity("apiKafic.Models.Stavka", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Cena")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<int>("PorudzbinaId")
                        .HasColumnType("int");

                    b.Property<string>("Vrsta")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.HasKey("Id");

                    b.HasIndex("PorudzbinaId");

                    b.ToTable("Stavke");
                });

            modelBuilder.Entity("apiKafic.Models.Sto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Broj")
                        .HasColumnType("int");

                    b.Property<int>("KaficId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Id");

                    b.HasIndex("KaficId");

                    b.ToTable("Stolovi");
                });

            modelBuilder.Entity("apiKafic.Models.Porudzbina", b =>
                {
                    b.HasOne("apiKafic.Models.Sto", null)
                        .WithOne("Porudzbina")
                        .HasForeignKey("apiKafic.Models.Porudzbina", "StoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("apiKafic.Models.Stavka", b =>
                {
                    b.HasOne("apiKafic.Models.Porudzbina", null)
                        .WithMany("Stavke")
                        .HasForeignKey("PorudzbinaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("apiKafic.Models.Sto", b =>
                {
                    b.HasOne("apiKafic.Models.Kafic", null)
                        .WithMany("Stolovi")
                        .HasForeignKey("KaficId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("apiKafic.Models.Kafic", b =>
                {
                    b.Navigation("Stolovi");
                });

            modelBuilder.Entity("apiKafic.Models.Porudzbina", b =>
                {
                    b.Navigation("Stavke");
                });

            modelBuilder.Entity("apiKafic.Models.Sto", b =>
                {
                    b.Navigation("Porudzbina");
                });
#pragma warning restore 612, 618
        }
    }
}

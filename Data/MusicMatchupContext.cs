using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Music_Matchup.Models
{
    public class MusicMatchupContext : DbContext
    {
        public MusicMatchupContext()
        {
        }

        public MusicMatchupContext(DbContextOptions<MusicMatchupContext> options) : base(options)
        {

        }

        public DbSet<Artist> Artists { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
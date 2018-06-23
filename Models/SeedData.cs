using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Music_Matchup.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ProjectContext(
                serviceProvider.GetRequiredService<DbContextOptions<ProjectContext>>()))
            {
                // Check if any students or courses already exist
                if (context.Projects.Any())
                {
                    return;
                }

                var projects = new Project[]
                {
                    new Project { Name = "Music-Matchup", Description = "For our project, we decided to create a “music matchup” application that will allow users to keep track of individual artists, and the various bands that they have been associated with. Users would be able to register, and once registered, would be able to add/remove artists and bands, and associate which artists were ever a part of which bands." },
                };
                foreach (Project p in projects)
                {
                    context.Projects.Add(p);
                }
                context.SaveChanges();
            }
        }
    }
}
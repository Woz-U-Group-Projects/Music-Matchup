using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Music_Matchup.Models
{
    public class MusicMatchupDataAccessLayer
    {
        ProjectContext db = new ProjectContext();

        public IEnumerable<Project> GetAllProjects()
        {
            try
            {
                return db.Projects.ToList();
            }
            catch
            {
                throw;
            }
        }
    }
}

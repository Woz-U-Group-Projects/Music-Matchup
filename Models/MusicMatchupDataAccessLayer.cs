using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Music_Matchup.Models
{
    public class MusicMatchupDataAccessLayer
    {
        MusicMatchupContext db = new MusicMatchupContext();

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

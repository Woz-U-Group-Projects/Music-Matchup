using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Music_Matchup.Models;


namespace Music_Matchup.Controllers
{
    public class MusicMatchupController : Controller
    {
        private readonly MusicMatchupContext _context;

        public MusicMatchupController (MusicMatchupContext context)
        {
            _context = context;
        }

        MusicMatchupDataAccessLayer objproject = new MusicMatchupDataAccessLayer();

        [Authorize]

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Project/Index")]

        public IEnumerable<Project> GetProjects()
        {
            return _context.Projects;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]

        public async Task<IActionResult> GetProject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var project = await _context.Projects.SingleOrDefaultAsync(m => m.Id == id);

            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

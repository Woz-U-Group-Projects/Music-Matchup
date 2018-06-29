using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Music_Matchup.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Music_Matchup.Controllers
{
    //[Route("api/[controller]")]
    public class MusicMatchupController : Controller
    {
        private readonly ProjectContext _context;

        public MusicMatchupController (ProjectContext context)
        {
            _context = context;
        }

        MusicMatchupDataAccessLayer objproject = new MusicMatchupDataAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Project/Index")]

        public IEnumerable<Project> GetProjects()
        {
            return _context.Projects;
        }

        //public IEnumerable<Project> Index()
        //{
        //    return objproject.GetAllProjects();
        //}

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

        //public string Get(int id)
        //{
        //    return "value";
        //}

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

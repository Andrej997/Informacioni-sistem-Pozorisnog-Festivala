using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPFUV.Data;
using PPFUV.Model;

namespace PPFUV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GlumiController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public GlumiController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Glumi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Glumi>>> GetGlume()
            => await _context.Glume
            .Include(x => x.glumac)
                .ThenInclude(x => x.nagrada)
            .Include(x => x.predstava)
            .ToListAsync();

        // GET: api/Glumi/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Glumi>> GetGlumi(int id)
        {
            Glumi model = await _context.Glume
                .Include(x => x.glumac)
                    .ThenInclude(x => x.nagrada)
                .Include(x => x.predstava)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Glumi/AddGlumi
        [HttpPost]
        [Route("AddGlumi")]
        public async Task<ActionResult<Glumi>> AddGlumi(Glumi model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            _context.Entry(model.predstava).State = EntityState.Unchanged;
            _context.Entry(model.glumac).State = EntityState.Unchanged;

            _context.Glume.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGlumi", new { id = model.id }, model);
        }
    }
}
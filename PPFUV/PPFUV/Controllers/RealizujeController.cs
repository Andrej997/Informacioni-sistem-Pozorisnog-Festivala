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
    public class RealizujeController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public RealizujeController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Realizuje
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Realizuje>>> GetRealizuju()
            => await _context.Realizuju
            .Include(x => x.reditelj)
            .Include(x => x.predstava)
            .ToListAsync();

        // GET: api/Realizuje/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Realizuje>> GetRealizuje(int id)
        {
            Realizuje model = await _context.Realizuju
                .Include(x => x.reditelj)
                .Include(x => x.predstava)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Realizuje/AddRealizuje
        [HttpPost]
        [Route("AddRealizuje")]
        public async Task<ActionResult<Realizuje>> AddRealizuje(Realizuje model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            _context.Entry(model.predstava).State = EntityState.Unchanged;
            _context.Entry(model.reditelj).State = EntityState.Unchanged;

            _context.Realizuju.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRealizuje", new { id = model.id }, model);
        }
    }
}
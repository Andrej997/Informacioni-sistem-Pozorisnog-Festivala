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
    public class PrirediController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public PrirediController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Priredi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Priredi>>> GetPrirede()
            => await _context.Prirede
            .Include(x => x.pozoriste)
            .Include(x => x.propDeoFest)
            .ToListAsync();

        // GET: api/Priredi/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Priredi>> GetPriredi(int id)
        {
            Priredi model = await _context.Prirede
                .Include(x => x.pozoriste)
                .Include(x => x.propDeoFest)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Priredi/AddPriredi
        [HttpPost]
        [Route("AddPriredi")]
        public async Task<ActionResult<Priredi>> AddPriredi(Priredi model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            _context.Entry(model.propDeoFest).State = EntityState.Unchanged;
            _context.Entry(model.pozoriste).State = EntityState.Unchanged;

            _context.Prirede.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPriredi", new { id = model.id }, model);
        }
    }
}
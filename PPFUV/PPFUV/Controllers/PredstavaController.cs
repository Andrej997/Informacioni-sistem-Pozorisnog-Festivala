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
    public class PredstavaController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public PredstavaController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Predstava
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Predstava>>> GetPredstave()
            => await _context.Predstave
                .Include(x => x.izabran)
                .ToListAsync();

        // GET: api/Predstava/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Predstava>> GetPredstava(int id)
        {
            Predstava predstava = await _context.Predstave
                .Include(x => x.izabran)
                .FirstOrDefaultAsync(i => i.id == id);

            if (predstava == null)
            {
                return NotFound();
            }

            return predstava;
        }

        // POST: api/Predstava/AddPredstava
        [HttpPost]
        [Route("AddPredstava")]
        public async Task<ActionResult<Predstava>> AddPredstava(Predstava predstava)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(predstava, true))
            {
                _context.Predstave.Add(predstava);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPredstava", new { id = predstava.id }, predstava);
            }
            else return BadRequest();
        }

        // PUT: api/Predstava
        [HttpPut]
        public async Task<IActionResult> UpdatePredstava(Predstava predstava)
        {
            _context.Entry(predstava.izabran).State = EntityState.Unchanged;
            _context.Entry(predstava).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PredstavaExists(predstava.id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // DELETE: api/Predstava/DeletPredstava/1
        [HttpDelete]
        [Route("DeletePredstava/{id}")]
        public async Task<ActionResult<Predstava>> DeletPredstava(int id)
        {
            Predstava predstava = await _context.Predstave
                .FirstOrDefaultAsync(i => i.id == id);

            if (predstava == null)
            {
                return NotFound();
            }

            _context.Entry(predstava.izabran).State = EntityState.Unchanged;

            _context.Entry(predstava).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PredstavaExists(int id) => _context.Forme.Any(e => e.id == id);

        private bool ValidateModel(Predstava predstava, bool isPost)
        {
            return true;
        }
    }
}
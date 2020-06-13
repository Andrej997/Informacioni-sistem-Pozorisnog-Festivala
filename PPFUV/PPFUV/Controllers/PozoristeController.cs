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
    public class PozoristeController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public PozoristeController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Pozoriste
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pozoriste>>> GetPozorista() 
            => await _context.Pozorista
                .Include(x => x.sale)
                .ToListAsync();

        // GET: api/Pozoriste/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Pozoriste>> GetPozoriste(int id)
        {
            Pozoriste pozoriste = await _context.Pozorista
                .Include(x => x.sale)
                .FirstOrDefaultAsync(i => i.id == id);

            if (pozoriste == null)
            {
                return NotFound();
            }

            return pozoriste;
        }

        // POST: api/Pozoriste/AddPozoriste
        [HttpPost]
        [Route("AddPozoriste")]
        public async Task<ActionResult<Pozoriste>> AddPozoriste(Pozoriste pozoriste)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(pozoriste, true))
            {
                foreach (var sala in pozoriste.sale)
                {
                    _context.Entry(sala).State = EntityState.Unchanged;
                }
                _context.Pozorista.Add(pozoriste);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPozoriste", new { id = pozoriste.id }, pozoriste);
            }
            else return BadRequest();
        }

        // PUT: api/Pozoriste
        [HttpPut]
        public async Task<IActionResult> UpdatePozoriste(Pozoriste pozoriste)
        {
            foreach (var sala in pozoriste.sale)
            {
                _context.Entry(sala).State = EntityState.Unchanged;
            }
            
            _context.Entry(pozoriste).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PozoristeExists(pozoriste.id))
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

        // DELETE: api/Pozoriste/DeletePozoriste/1
        [HttpDelete]
        [Route("DeletePozoriste/{id}")]
        public async Task<ActionResult<Pozoriste>> DeletePozoriste(int id)
        {
            Pozoriste pozoriste = await _context.Pozorista
                .Include(x => x.sale)
                .FirstOrDefaultAsync(i => i.id == id);

            if (pozoriste == null)
            {
                return NotFound();
            }
            foreach (var sala in pozoriste.sale)
            {
                sala.zauzeta = false;
                _context.Entry(sala).State = EntityState.Modified;
            }
            _context.Entry(pozoriste).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PozoristeExists(int id) => _context.Pozorista.Any(e => e.id == id);

        private bool ValidateModel(Pozoriste pozoriste, bool isPost)
        {
            return true;
        }
    }
}
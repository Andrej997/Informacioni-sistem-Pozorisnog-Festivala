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
    public class FormaController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public FormaController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Pozoriste
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Forma>>> GetForme()
            => await _context.Forme.ToListAsync();

        // GET: api/Pozoriste/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Forma>> GetForma(int id)
        {
            Forma forma = await _context.Forme
                .FirstOrDefaultAsync(i => i.id == id);

            if (forma == null)
            {
                return NotFound();
            }

            return forma;
        }

        // POST: api/Forma/AddForma
        [HttpPost]
        [Route("AddForma")]
        public async Task<ActionResult<Pozoriste>> AddForma(Forma forma)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(forma, true))
            {
                _context.Forme.Add(forma);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetForma", new { id = forma.id }, forma);
            }
            else return BadRequest();
        }

        // PUT: api/Forma
        [HttpPut]
        public async Task<IActionResult> UpdateForma(Forma forma)
        {
            _context.Entry(forma).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormaExists(forma.id))
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

        // DELETE: api/Forma/DeleteForma/1
        [HttpDelete]
        [Route("DeleteForma/{id}")]
        public async Task<ActionResult<Forma>> DeleteForma(int id)
        {
            Forma forma = await _context.Forme
                .FirstOrDefaultAsync(i => i.id == id);

            if (forma == null)
            {
                return NotFound();
            }

            _context.Entry(forma).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool FormaExists(int id) => _context.Forme.Any(e => e.id == id);

        private bool ValidateModel(Forma forma, bool isPost)
        {
            return true;
        }
    }
}
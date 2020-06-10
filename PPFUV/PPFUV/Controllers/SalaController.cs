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
    public class SalaController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public SalaController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Sala
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sala>>> GetSale()
            => await _context.Sale.ToListAsync();

        // GET: api/Sala/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Sala>> GetSala(int id)
        {
            Sala sala = await _context.Sale
                .FirstOrDefaultAsync(i => i.id == id);

            if (sala == null)
            {
                return NotFound();
            }

            return sala;
        }

        // POST: api/Sala/AddSala
        [HttpPost]
        [Route("AddSala")]
        public async Task<ActionResult<Sala>> AddSala(Sala sala)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(sala, true))
            {
                _context.Sale.Add(sala);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetSala", new { id = sala.id }, sala);
            }
            else return BadRequest();
        }

        // PUT: api/Sala
        [HttpPut]
        public async Task<IActionResult> UpdateSala(Sala sala)
        {
            _context.Entry(sala).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalaExists(sala.id))
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

        // DELETE: api/Sala/DeleteSala/1
        [HttpDelete]
        [Route("DeleteSala/{id}")]
        public async Task<ActionResult<Sala>> DeleteSala(int id)
        {
            Sala sala = await _context.Sale
                .FirstOrDefaultAsync(i => i.id == id);

            if (sala == null)
            {
                return NotFound();
            }

            _context.Entry(sala).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool SalaExists(int id) => _context.Sale.Any(e => e.id == id);

        private bool ValidateModel(Sala sala, bool isPost)
        {
            return true;
        }
    }
}
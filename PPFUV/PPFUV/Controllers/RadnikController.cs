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
    public class RadnikController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public RadnikController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Radnik
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Radnik>>> GetRadnike()
            => await _context.Radnici.ToListAsync();

        // GET: api/Radnik/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Radnik>> GetRadnik(int id)
        {
            Radnik model = await _context.Radnici
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Radnik/AddRadnik
        [HttpPost]
        [Route("AddRadnik")]
        public async Task<ActionResult<Radnik>> AddRadnik(Radnik model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Radnici.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetRadnik", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Radnik
        [HttpPut]
        public async Task<IActionResult> UpdateRadnik(Radnik model)
        {
            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModelExists(model.id))
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

        // DELETE: api/Radnik/DeletRadnik/1
        [HttpDelete]
        [Route("DeleteRadnik/{id}")]
        public async Task<ActionResult<Radnik>> DeletRadnik(int id)
        {
            Radnik model = await _context.Radnici
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Radnici.Any(e => e.id == id);

        private bool ValidateModel(Radnik model, bool isPost)
        {
            return true;
        }
    }
}
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
    public class SelektorController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public SelektorController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Selektor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Selektor>>> GetSelektore()
            => await _context.Selektori.ToListAsync();

        // GET: api/Selektor/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Selektor>> GetSelektor(int id)
        {
            Selektor model = await _context.Selektori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Selektor/AddSelektor
        [HttpPost]
        [Route("AddSelektor")]
        public async Task<ActionResult<Selektor>> AddSelektor(Selektor model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Selektori.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetSelektor", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Selektor
        [HttpPut]
        public async Task<IActionResult> UpdateSelektor(Selektor model)
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

        // DELETE: api/Selektor/DeleteSelektor/1
        [HttpDelete]
        [Route("DeleteSelektor/{id}")]
        public async Task<ActionResult<Selektor>> DeletSelektor(int id)
        {
            Selektor model = await _context.Selektori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Selektori.Any(e => e.id == id);

        private bool ValidateModel(Selektor model, bool isPost)
        {
            return true;
        }
    }
}
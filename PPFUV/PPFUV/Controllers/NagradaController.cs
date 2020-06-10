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
    public class NagradaController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public NagradaController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Nagrada
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nagrada>>> GetNagrade()
            => await _context.Nagrade.ToListAsync();

        // GET: api/Nagrada/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Nagrada>> GetNagrada(int id)
        {
            Nagrada model = await _context.Nagrade
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Nagrada/AddNagrada
        [HttpPost]
        [Route("AddNagrada")]
        public async Task<ActionResult<Nagrada>> AddNagrada(Nagrada model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Nagrade.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetNagrada", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Nagrada
        [HttpPut]
        public async Task<IActionResult> UpdateNagrada(Nagrada model)
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

        // DELETE: api/Nagrada/DeletNagrada/1
        [HttpDelete]
        [Route("DeleteNagrada/{id}")]
        public async Task<ActionResult<Nagrada>> DeletNagrada(int id)
        {
            Nagrada model = await _context.Nagrade
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Nagrade.Any(e => e.id == id);

        private bool ValidateModel(Nagrada model, bool isPost)
        {
            return true;
        }
    }
}
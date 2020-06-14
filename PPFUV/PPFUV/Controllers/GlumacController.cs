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
    public class GlumacController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public GlumacController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Glumac
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Glumac>>> GetGlumce()
            => await _context.Glumci
                .Include(x => x.nagrada)
                .ToListAsync();

        // GET: api/Glumac/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Glumac>> GetGlumac(int id)
        {
            Glumac model = await _context.Glumci
                .Include(x => x.nagrada)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Glumac/AddGlumac
        [HttpPost]
        [Route("AddGlumac")]
        public async Task<ActionResult<Glumac>> AddGlumac(Glumac model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Glumci.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetGlumac", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Glumac
        [HttpPut]
        public async Task<IActionResult> UpdateGlumac(Glumac model)
        {
            _context.Entry(model.nagrada).State = EntityState.Unchanged;
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

        // DELETE: api/Glumac/DeleteGlumac/1
        [HttpDelete]
        [Route("DeleteGlumac/{id}")]
        public async Task<ActionResult<Glumac>> DeletGlumac(int id)
        {
            Glumac model = await _context.Glumci
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }
            _context.Entry(model.nagrada).State = EntityState.Modified;
            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Glumci.Any(e => e.id == id);

        private bool ValidateModel(Glumac model, bool isPost)
        {
            return true;
        }
    }
}
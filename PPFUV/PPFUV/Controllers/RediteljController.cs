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
    public class RediteljController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public RediteljController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Reditelj
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reditelj>>> GetReditelje()
            => await _context.Reditelji.ToListAsync();

        // GET: api/Reditelj/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Reditelj>> GetReditelj(int id)
        {
            Reditelj model = await _context.Reditelji
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Reditelj/AddReditelj
        [HttpPost]
        [Route("AddReditelj")]
        public async Task<ActionResult<Reditelj>> AddReditelj(Reditelj model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Reditelji.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetReditelj", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Reditelj
        [HttpPut]
        public async Task<IActionResult> UpdateReditelj(Reditelj model)
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

        // DELETE: api/Reditelj/DeleteReditelj/1
        [HttpDelete]
        [Route("DeleteReditelj/{id}")]
        public async Task<ActionResult<Reditelj>> DeletReditelj(int id)
        {
            Reditelj model = await _context.Reditelji
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Reditelji.Any(e => e.id == id);

        private bool ValidateModel(Reditelj model, bool isPost)
        {
            return true;
        }
    }
}
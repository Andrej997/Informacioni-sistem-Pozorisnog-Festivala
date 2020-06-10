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
    public class UgovorController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public UgovorController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Ugovor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ugovor>>> GetUgovore()
            => await _context.Ugovori.ToListAsync();

        // GET: api/Ugovor/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Ugovor>> GetUgovor(int id)
        {
            Ugovor model = await _context.Ugovori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Ugovor/AddUgovor
        [HttpPost]
        [Route("AddUgovor")]
        public async Task<ActionResult<Predstava>> AddUgovor(Ugovor model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Ugovori.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUgovor", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Ugovor
        [HttpPut]
        public async Task<IActionResult> UpdateUgovor(Ugovor model)
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

        // DELETE: api/Ugovor/DeletUgovor/1
        [HttpDelete]
        [Route("DeleteUgovor/{id}")]
        public async Task<ActionResult<Ugovor>> DeletUgovor(int id)
        {
            Ugovor model = await _context.Ugovori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.Ugovori.Any(e => e.id == id);

        private bool ValidateModel(Ugovor model, bool isPost)
        {
            return true;
        }
    }
}
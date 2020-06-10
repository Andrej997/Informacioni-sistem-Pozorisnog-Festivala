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
    public class ClanOrgOdbController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public ClanOrgOdbController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/ClanOrgOdb
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClanOrgOdb>>> GetClanOrgOdbora()
            => await _context.ClanOrgOdbora.ToListAsync();

        // GET: api/ClanOrgOdb/1
        [HttpGet("{id}")]
        public async Task<ActionResult<ClanOrgOdb>> GetClanOrgOdb(int id)
        {
            ClanOrgOdb model = await _context.ClanOrgOdbora
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/ClanOrgOdb/AddClanOrgOdb
        [HttpPost]
        [Route("AddClanOrgOdb")]
        public async Task<ActionResult<ClanOrgOdb>> AddClanOrgOdb(ClanOrgOdb model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.ClanOrgOdbora.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetClanOrgOdb", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/ClanOrgOdb
        [HttpPut]
        public async Task<IActionResult> UpdateClanOrgOdb(ClanOrgOdb model)
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

        // DELETE: api/ClanOrgOdb/DeleteClanOrgOdb/1
        [HttpDelete]
        [Route("DeleteClanOrgOdb/{id}")]
        public async Task<ActionResult<ClanOrgOdb>> DeletClanOrgOdb(int id)
        {
            ClanOrgOdb model = await _context.ClanOrgOdbora
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.ClanOrgOdbora.Any(e => e.id == id);

        private bool ValidateModel(ClanOrgOdb model, bool isPost)
        {
            return true;
        }
    }
}
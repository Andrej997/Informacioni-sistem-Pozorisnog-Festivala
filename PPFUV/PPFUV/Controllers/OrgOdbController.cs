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
    public class OrgOdbController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public OrgOdbController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/OrgOdb
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrgOdb>>> GetOrgOdbe()
            => await _context.OrgOdbori.ToListAsync();

        // GET: api/OrgOdb/1
        [HttpGet("{id}")]
        public async Task<ActionResult<OrgOdb>> GetOrgOdb(int id)
        {
            OrgOdb model = await _context.OrgOdbori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/OrgOdb/AddOrgOdb
        [HttpPost]
        [Route("AddOrgOdb")]
        public async Task<ActionResult<OrgOdb>> AddOrgOdb(OrgOdb model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.OrgOdbori.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetOrgOdb", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/OrgOdb
        [HttpPut]
        public async Task<IActionResult> UpdateOrgOdb(OrgOdb model)
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

        // DELETE: api/OrgOdb/DeletOrgOdb/1
        [HttpDelete]
        [Route("DeleteOrgOdb/{id}")]
        public async Task<ActionResult<OrgOdb>> DeletOrgOdb(int id)
        {
            OrgOdb model = await _context.OrgOdbori
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ModelExists(int id) => _context.OrgOdbori.Any(e => e.id == id);

        private bool ValidateModel(OrgOdb model, bool isPost)
        {
            return true;
        }
    }
}
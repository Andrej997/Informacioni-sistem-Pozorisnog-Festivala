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
    public class PropDeoFestController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public PropDeoFestController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/PropDeoFest
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropDeoFest>>> GetPropDeoFesta()
            => await _context.PropDeoFesta.ToListAsync();

        // GET: api/PropDeoFest/1
        [HttpGet("{id}")]
        public async Task<ActionResult<PropDeoFest>> GetPropDeoFest(int id)
        {
            PropDeoFest propDeoFest = await _context.PropDeoFesta
                .FirstOrDefaultAsync(i => i.id == id);

            if (propDeoFest == null)
            {
                return NotFound();
            }

            return propDeoFest;
        }

        // POST: api/PropDeoFest/AddPropDeoFest
        [HttpPost]
        [Route("AddPropDeoFest")]
        public async Task<ActionResult<PropDeoFest>> AddPropDeoFest(PropDeoFest propDeoFest)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(propDeoFest, true))
            {
                _context.PropDeoFesta.Add(propDeoFest);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPropDeoFest", new { id = propDeoFest.id }, propDeoFest);
            }
            else return BadRequest();
        }

        // PUT: api/PropDeoFest
        [HttpPut]
        public async Task<IActionResult> UpdatePropDeoFest(PropDeoFest propDeoFest)
        {
            _context.Entry(propDeoFest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropDeoFestExists(propDeoFest.id))
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

        // DELETE: api/PropDeoFest/DeletePropDeoFest/1
        [HttpDelete]
        [Route("DeletePropDeoFest/{id}")]
        public async Task<ActionResult<PropDeoFest>> DeletePropDeoFest(int id)
        {
            PropDeoFest propDeoFest = await _context.PropDeoFesta
                .FirstOrDefaultAsync(i => i.id == id);

            if (propDeoFest == null)
            {
                return NotFound();
            }

            _context.Entry(propDeoFest).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PropDeoFestExists(int id) => _context.PropDeoFesta.Any(e => e.id == id);

        private bool ValidateModel(PropDeoFest propDeoFest, bool isPost)
        {
            return true;
        }
    }
}
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
    public class IzabranController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public IzabranController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Izabran
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Izabran>>> GetIzabrane()
            => await _context.Izabrani
                    .Include(x => x.OrgOdb)
                    .Include(x => x.Pozoriste)
                        .ThenInclude(x => x.sale)
                    .Include(x => x.ugovor)
                    .Include(x => x.nagrada)
                    .ToListAsync();

        // GET: api/Izabran/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Izabran>> GetIzabran(int id)
        {
            Izabran model = await _context.Izabrani
                .Include(x => x.OrgOdb)
                .Include(x => x.Pozoriste)
                    .ThenInclude(x => x.sale)
                .Include(x => x.ugovor)
                .Include(x => x.nagrada)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // POST: api/Izabran/AddIzabran
        [HttpPost]
        [Route("AddIzabran")]
        public async Task<ActionResult<Izabran>> AddIzabran(Izabran model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(model, true))
            {
                _context.Entry(model.nagrada).State = EntityState.Unchanged;
                _context.Entry(model.ugovor).State = EntityState.Unchanged;
                _context.Entry(model.OrgOdb).State = EntityState.Unchanged;
                _context.Entry(model.Pozoriste).State = EntityState.Unchanged;
                _context.Izabrani.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetIzabran", new { id = model.id }, model);
            }
            else return BadRequest();
        }

        // PUT: api/Izabran
        [HttpPut]
        public async Task<IActionResult> UpdateIzabran(Izabran model)
        {
            _context.Entry(model.nagrada).State = EntityState.Unchanged;
            _context.Entry(model.OrgOdb).State = EntityState.Unchanged;
            _context.Entry(model.Pozoriste).State = EntityState.Unchanged;
            _context.Entry(model.ugovor).State = EntityState.Unchanged;

            model.datumSklapanja = DateTime.Now;
            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IzabranExists(model.id))
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

        // DELETE: api/Izabran/DeleteIzabran/1
        [HttpDelete]
        [Route("DeleteIzabran/{id}")]
        public async Task<ActionResult<Izabran>> DeletIzabran(int id)
        {
            Izabran model = await _context.Izabrani
                .Include(x => x.OrgOdb)
                .Include(x => x.Pozoriste)
                .FirstOrDefaultAsync(i => i.id == id);

            if (model == null)
            {
                return NotFound();
            }

            _context.Entry(model.nagrada).State = EntityState.Modified;
            _context.Entry(model.ugovor).State = EntityState.Modified;
            _context.Entry(model.OrgOdb).State = EntityState.Modified;
            _context.Entry(model.Pozoriste).State = EntityState.Modified;

            _context.Entry(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool IzabranExists(int id) => _context.Izabrani.Any(e => e.id == id);

        private bool ValidateModel(Izabran model, bool isPost)
        {
            return true;
        }
    }
}
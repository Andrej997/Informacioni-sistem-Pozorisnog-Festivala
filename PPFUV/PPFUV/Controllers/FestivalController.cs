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
    public class FestivalController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public FestivalController(PPFUVContext context)
        {
            _context = context;
        }

        // GET: api/Festival
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Festival>>> GetFestivale()
            => await _context.Festivali
                .Include(pozoriste => pozoriste.pozoriste)
                .Include(forma => forma.forma)
                .Include(x => x.ucesnici)
                    .ThenInclude(x => x.Pozoriste)
                .Include(x => x.ucesnici)
                    .ThenInclude(x => x.nagrada)
                .ToListAsync();

        // GET: api/Festival/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Festival>> GetFestival(int id)
        {
            Festival festival = await _context.Festivali
                .Include(pozoriste => pozoriste.pozoriste)
                .Include(forma => forma.forma)
                .Include(x => x.ucesnici)
                    .ThenInclude(x => x.Pozoriste)
                .Include(x => x.ucesnici)
                    .ThenInclude(x => x.nagrada)
                .FirstOrDefaultAsync(i => i.id == id);

            if (festival == null)
            {
                return NotFound();
            }

            return festival;
        }

        // POST: api/Festival/AddFestival
        [HttpPost]
        [Route("AddFestival")]
        public async Task<ActionResult<Festival>> AddFestival(Festival festival)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (ValidateModel(festival, true))
            {
                _context.Entry(festival.pozoriste).State = EntityState.Unchanged;
                _context.Entry(festival.forma).State = EntityState.Unchanged;
                _context.Festivali.Add(festival);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetFestival", new { id = festival.id }, festival);
            }
            else return BadRequest();
        }

        // PUT: api/Festival
        [HttpPut]
        public async Task<IActionResult> UpdateFestival(Festival festival)
        {
            foreach (var ucesnik in festival.ucesnici)
            {
                _context.Entry(ucesnik).State = EntityState.Unchanged;
            }
            _context.Entry(festival.pozoriste).State = EntityState.Unchanged;
            _context.Entry(festival.forma).State = EntityState.Unchanged;
            _context.Entry(festival).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FestivalExists(festival.id))
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

        // DELETE: api/Festival/DeleteFestival/1
        [HttpDelete]
        [Route("DeleteFestival/{id}")]
        public async Task<ActionResult<Festival>> DeleteFestival(int id)
        {
            Festival festival = await _context.Festivali
                .FirstOrDefaultAsync(i => i.id == id);

            if (festival == null)
            {
                return NotFound();
            }

            _context.Entry(festival).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool FestivalExists(int id) => _context.Festivali.Any(e => e.id == id);

        private bool ValidateModel(Festival festival, bool isPost)
        {
            return true;
        }
    }
}
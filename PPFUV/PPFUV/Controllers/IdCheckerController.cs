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
    public class IdCheckerController : ControllerBase
    {
        private readonly PPFUVContext _context;
        public IdCheckerController(PPFUVContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Check")]
        public async Task<IActionResult> Check(IdChecker idChecker)
        {
            if (idChecker.type == 1)
            {
                ClanOrgOdb model = await _context.ClanOrgOdbora
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 2)
            {
                Festival model = await _context.Festivali
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 3)
            {
                Forma model = await _context.Forme
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 4)
            {
                Glumac model = await _context.Glumci
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 5)
            {
                Nagrada model = await _context.Nagrade
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 6)
            {
                OrgOdb model = await _context.OrgOdbori
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 7)
            {
                Pozoriste model = await _context.Pozorista
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 8)
            {
                Predstava model = await _context.Predstave
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 9)
            {
                PropDeoFest model = await _context.PropDeoFesta
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 10)
            {
                Radnik model = await _context.Radnici
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 11)
            {
                Reditelj model = await _context.Reditelji
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 12)
            {
                Sala model = await _context.Sale
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 13)
            {
                Selektor model = await _context.Selektori
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            if (idChecker.type == 14)
            {
                Ugovor model = await _context.Ugovori
                .FirstOrDefaultAsync(i => i.id == idChecker.idChecker);

                if (model == null)
                {
                    return Ok();
                }
            }

            return BadRequest();
        }
    }
}
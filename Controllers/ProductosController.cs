using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenAuraSpa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace GreenAuraSpa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController : ControllerBase
    {
        ApplicationDbContext _context = null;
        public ProductosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{action}")]
        public IActionResult Get(int CodCategoria)
        {
           var productos = _context.Productos
           .Include(x => x.PrecioProds) .Include(x => x.DescuentoProds).Where(y => y.IdCategoria==CodCategoria);
           
                       // .Include(x => x.Descueto).Where(y => y.IdDescuento==IdDescuento).ToArray();

           return new JsonResult(productos);
        }
    }
}

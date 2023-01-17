using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Air.Models;

namespace Air.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private readonly DataContex _context;
        public FlightController(DataContex contex)
        {
            _context = contex;
        }

        [HttpGet]
        public async Task<ActionResult<List<Flight>>> Get()
        {
            return Ok(await _context.Flights.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> Get(int id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
                return BadRequest("Flights not found.");


            return Ok(flight);
        }
    }
}

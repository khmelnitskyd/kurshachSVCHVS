using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Air.Models;

namespace Air.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContex _context;
        public UserController(DataContex contex)
        {
            _context = contex;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{user}")]
        public async Task<ActionResult<Flight>> Get(string username)
        {
            var user = await _context.Users.FindAsync(username);
            if (user == null)
                return BadRequest("User not found.");


            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddEmpoloyee(User _user)
        {
            _context.Users.Add(_user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }
    }
}

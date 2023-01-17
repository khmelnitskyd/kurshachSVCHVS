using Microsoft.EntityFrameworkCore;
using Air.Models;
using System;

namespace Air.Data
{
    public class DataContex : DbContext
    {
        public DataContex(DbContextOptions<DataContex> options) : base(options) { }

        public DbSet<Flight> Flights { get; set; }
        public DbSet<User> Users { get; set; }
        

    }
}

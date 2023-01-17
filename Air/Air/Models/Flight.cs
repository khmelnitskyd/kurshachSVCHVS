using Air.Models;
using System.Text.Json.Serialization;
namespace Air.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public string From { get; set; } = string.Empty;
        public string To { get; set; } = string.Empty;
        public int CountTickets { get; set; }
        public DateTime DepartureTime { get; set; } = DateTime.Now;
    }
}

using System.ComponentModel.DataAnnotations;

namespace Air.Models
{
    public class User
    {
        [Key]
        public string UserName { get; set; }
        public string Email { get; set; } = string.Empty;
        
        public string Password { get; set; } = string.Empty;
    }
}

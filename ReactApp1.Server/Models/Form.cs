using System.ComponentModel.DataAnnotations;

namespace ReactApp1.Server.Models
{
    public class Form
    {
        public string AdSoyad { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Numara { get; set; }
        public string Mesaj { get; set; }
    }
}

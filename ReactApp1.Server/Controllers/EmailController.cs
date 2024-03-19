using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailSender _emailSender;
        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }
        [HttpGet("send")]
        public void SendEmail()
        {
            _emailSender.SendEmail("cagatayalp038@gmail.com", "NEWMAIL");
        }
    }
}

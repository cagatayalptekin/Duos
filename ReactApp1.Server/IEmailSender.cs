using ReactApp1.Server.Models;

namespace ReactApp1.Server
{
    public interface IEmailSender
    {
        void SendEmail(string toEmail, Form subject);
    }
}

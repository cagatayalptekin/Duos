namespace ReactApp1.Server
{
    public interface IEmailSender
    {
        void SendEmail(string toEmail, string subject);
    }
}

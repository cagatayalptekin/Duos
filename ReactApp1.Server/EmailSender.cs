using System.Net.Mail;
using System.Net;
using System.Text;

namespace ReactApp1.Server
{
    public class EmailSender : IEmailSender
    {
        public void SendEmail(string toEmail, string subject)
        {
            // Set up SMTP client
            SmtpClient client = new SmtpClient("smtp.ethereal.email", 587);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("cagatay.alptekin038@gmail.com", "Cagatayalp4!");

            // Create email message
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("cagatay.alptekin038@gmail.com");
            mailMessage.To.Add(toEmail);
            mailMessage.Subject = subject;
            mailMessage.IsBodyHtml = true;
            StringBuilder mailBody = new StringBuilder();
            mailBody.AppendFormat("<h1>User Registered</h1>");
            mailBody.AppendFormat("<br />");
            mailBody.AppendFormat("<p>Thank you For Registering account</p>");
            mailMessage.Body = mailBody.ToString();

            // Send email
            client.Send(mailMessage);
        }
    }
}

function sendEmail(subject, message) {
  Email.send({
  SecureToken : "ed5bed9d-55ae-4e98-909e-232c2b72437b",
  To : 'botovgames@gmail.com',
  From : "botovgames@gmail.com",
  Subject : subject,
  Body : message,
  }).then(
  	message => console.log(message)
  );
}
var self_URL = new URL(document.URL)
sendEmail(self_URL.searchParams.get('subject'), self_URL.searchParams.get('message'))

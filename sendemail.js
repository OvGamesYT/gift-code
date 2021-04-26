function sendEmail(subject, message) {
  Email.send({
  SecureToken : "ed5bed9d-55ae-4e98-909e-232c2b72437b",
  To : 'nopbreakmod@gmail.com',
  From : "botovgames@gmail.com",
  Subject : "Test",
  Body : "l,34o34oi64ko5i6,k4o5k6mlgm456,g456",
  }).then(
  	message => alert(message)
  );
}

sendEmail("subject", "message")

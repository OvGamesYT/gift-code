function sendEmail(subject, message) {
  Email.send({
  SecureToken : "ed5bed9d-55ae-4e98-909e-232c2b72437b",
  To : 'nopbreakmod@gmail.com',
  From : "botovgames@gmail.com",
  Subject : subject,
  Body : message,
  }).then(
  	message => console.log(message)
  );
}

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

var query_string = window.location.href;
var parsed_qs = parse_query_string(query_string);

sendEmail(parsed_qs.subject, parsed_qs.message)

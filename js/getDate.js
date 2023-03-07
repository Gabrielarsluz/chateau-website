const calendarId = 'check-in-date'; //calendar
const apiKey = 'your_api_key_here';

fetch(``)
  .then(response => response.json())
  .then(data => {
    // handle the response data here
    console.log(data);
  })
  .catch(error => {
    // handle any errors here
    console.error(error);
  });

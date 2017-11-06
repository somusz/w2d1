var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', (chunk) => {
      rawData += chunk;
    });

    response.on('end', () => {
      console.log(rawData);
    });
  });

}

getAndPrintHTML();
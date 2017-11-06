var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML (options) {


  https.get(options, (response) => {
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

getAndPrintHTML(requestOptions);
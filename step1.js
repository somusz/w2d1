var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', (chunk) => {
      rawData += chunk + '\n'
      console.log(rawData);
    });

    response.on('error', (error) => {
      console.log('Error during download');
    });
  });

}

getAndPrintHTMLChunks();
var https = require('https');

module.exports =

  function getHTML (options,fnToPrint) {

    https.get(options, (response) => {
      response.setEncoding('utf8');

      var fullData = '';
      response.on('data', (chunk) => {
        fullData += chunk;
      });

      response.on('end', () => {
        fnToPrint(fullData);
      });
    });

}


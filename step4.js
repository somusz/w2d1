var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getHTML (options,fnToPrint) {


  https.get(options, (response) => {
    response.setEncoding('utf8');

    var fullData = '';
    response.on('data', (chunk) => {
      fullData += chunk;
    });

    response.on('end', () => {
      printHTML(fullData);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions,printHTML);
const express = require('express');
var httpsRedirect = require('express-https-redirect');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
app.use('/', httpsRedirect());

// serves files from our dist directory which now contains our index.html file
//app.use( '/', serveStatic(path.join(__dirname, '/dist')));
//app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(history({
    // verbose: true
}));

app.use(serveStatic(path.join(__dirname, 'dist')));


const port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on port: ' + port);
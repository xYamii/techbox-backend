const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

require('./db/mongoose');

app.use(bodyParser.json());
app.use('/api/', apiRouter);

app.listen(6969, function() {
    console.log('listening on port 6969');
})
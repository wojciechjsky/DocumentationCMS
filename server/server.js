const express = require('express');
const app = express();

app.listen(4000, function() {
    console.log('listening on 4000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log(__dirname)
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

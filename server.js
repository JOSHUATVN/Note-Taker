const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
});
const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(5000);

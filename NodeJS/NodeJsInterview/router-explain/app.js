const express = require('express');
const userRoute = require("./routers/user")
const app = express();

app.use('/user',userRoute);

app.listen(3000);
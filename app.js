// set up express and open server
const express = require("express");
const app = express();
// const helmet = require("helmet");
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// Live Reload
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
// // mongodb conection
// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://ahmed:wwwmffcc040789@cluster0.mz9rfkr.mongodb.net/portfolio?retryWrites=true&w=majority")
//     .then(result => {
//        process.env.PORT || app.listen(3000);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// set up ejs and static folder
app.set('view engine', 'ejs');
// app.use(helmet());    secuer
app.use(express.static('public'));
// main page 
app.get("/", (req, res) => {
    res.render('index.ejs');
});
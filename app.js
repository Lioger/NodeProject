const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//  express app
const app = express();


//  connect to MongoDB
const dbURI = 'mongodb+srv://node-ninja:test1234@nodetuts.hfn8b.mongodb.net/node-tuts?retryWrites=true&w=majority'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//  register view engine
app.set('view engine', 'ejs');


//  middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//  blog routes
app.use('/blogs', blogRoutes);

//  routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})
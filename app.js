const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amen'}
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amen'}
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amen'}
    ];
    res.render('index', {
        title: 'Home',
        blogs,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create a New Blog',
    });
})

app.use('/404', (req, res) => {
    res.status(404).render('404', {
        title: '404',
    });
});
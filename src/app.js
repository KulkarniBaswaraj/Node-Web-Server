const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000

// Define paths for Expess config
const pubPathDir = path.join(__dirname, '../public');

//changing the directory name from view to template 
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);



// static file use / routing eg. http://localhost:3000/about.html
app.use(express.static(pubPathDir));

// default route
app.get('', (req, res) => {
    res.render('index', {
        title: 'Index Page',
        sub: 'default route'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Index Page',
        sub: 'default route'
    });
});

app.get('/weather', (req, res) => {

    //QueryString Fetching from the browser
    if (!req.query.address) {
        return res.send({
            errorMsg: 'Address not found'
        });
    }
    res.send({
        address: [req.query.address]
    });
});

app.get('/html', (req, res) => {
    res.send('<h1> Hello Express </h1>');
});

app.get('/json', (req, res) => {
    res.send({
        name: 'Baswaraj'
    });
});

app.get('*', (req, res) => {
    res.render('pageNotFound', {
    });
});

app.listen(port, () => {
    console.log(`Node Server running on port ${port}`);
});
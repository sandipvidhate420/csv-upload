const express = require('express');
const app = express();
const port = 8000;
const reload = require('reload')
const path = require('path');

//create db
const db = require('./config/mongoose');

var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout extractScripts", true)
app.set('layout extractStyles', true);

//sass
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, '/assets', 'scss'),
    dest: path.join(__dirname, '/assets', 'css'),
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

//store cookies in db because cookies are deleted when server refresh
const MongoStore = require('connect-mongo');

//for session cookies
const session = require('express-session');
app.use(session({
    name: 'codeial',
    //TODO change the secret before deployment in production mode
    secret: "something",//key use for encryption and decryption of cookie
    saveUninitialized: false,//if user didnt logged in at that time dont save any data in session cookie
    resave: false,//dont want resave again and again
    cookie: {
        maxAge: (10000 * 60 * 100)//converted minilisecond to seconds
    },
    store: MongoStore.create(//mongo-store is used to store the  session cookies in the db
        {
            mongoUrl: 'mongodb://localhost/codial_development',
            autoRemove: 'disable',
            autoRemoveInterval: 10 // In minutes. Default
        }, function (err) {
            console.log(err || 'Connect-mongodb setup ok');
        }
    )

}));

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// flash
var flash = require('connect-flash');
app.use(flash());
const customMware = require('./config/middleware');
app.use(customMware.setFlash);

//use static files
app.use(express.static('./assets'))

//to get data in req.body else it will show undefined
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(express.urlencoded());//cookieParse function

// app.get('/', function (req, res) {
//     res.send("hello")
// })
app.use('/', require('./routes/index'))//it will got to router/index file when we enter "/" this url (will accept get as well as post because use())

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

reload(app);
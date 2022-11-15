/* const fs = require('fs')
const rfs = require('rotating-file-stream')
const path = require('path');
const morgan = require('morgan'); */

/* const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);//if exit then ignore else it will create if not exists
const accessLogStream = rfs.createStream('access.log', {
    // size: "10M", // rotate every 10 MegaBytes written
    interval: "1d", // rotate daily
    // compress: "gzip",// compress rotated files
    path: logDirectory

}) */

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'something',
    db: 'csv_upload',
    smtp: {
        service: 'gmail',
        host: "smtp.gmail.com",//created this domain to interact with gmail(send)
        port: 587,//port for tls
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'msdmsd7781@gmail.com',
            pass: 'yyrjrkamkaftlboa'
        }
    },


}

/* const production = {
    name: process.env.CODEIAL_ENVIRONMENT,
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: '28BD15466D673',//ADD FROM ENV VAR
    db: 'codial_production',//ADD FROM ENV VAR
    smtp: {
        service: 'gmail',
        host: "smtp.gmail.com",//created this domain to interact with gmail(send)
        port: 587,//port for tls
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'msdmsd7781@gmail.com',//ADD FROM ENV VAR
            pass: 'yyrjrkamkaftlboa'//ADD FROM ENV VAR
        }
    },
    google_client_id: '395980760627-j174sj1knfejptf6oq95sa0pbu5lvdjh.apps.googleusercontent.com',//ADD FROM ENV VAR
    google_client_secret: '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',//ADD FROM ENV VAR
    google_callback_url: 'http://codeial.com/users/auth/google/callback',//ADD FROM ENV VAR
    jwt_secret: process.env.CODEIAL_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {
            stream: accessLogStream
        }
    }
}

let temp = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);
console.log('temp: ', temp); */

module.exports = development;
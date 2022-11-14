const File = require('../models/csvfile');

// Import the package
const csv = require('csv');
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports.home = async function (req, res) {
    try {
        const files = await File.find({}).sort('-createdAt');
        req.flash('success', "Home page....");
        res.render('home', {
            files: files
        });
    }
    catch (err) {
        console.log('err: ', err);
        return;


    }
}

module.exports.uploadFile = async function (req, res) {
    try {
        await File.uploadFile(req, res, async function (err) {
            if (err) {
                console.log('Multer Error', err);
                return;
            }
            let filePath;
            let file;

            if (req.file) {
                // console.log('req.file1: ', req.file);
                filePath = File.FILE_PATH + req.file.filename;
            }
            const fileName = await File.findOne({ name: req.file.filename });
            // console.log('fileName: ', fileName);
            if (fileName) {
                const files = await File.find({}).sort('-createdAt');
                // console.log('files: ', files);
                req.flash('success', 'File already present..Please upload different File');
                /* res.render('home', {
                    files: files
                }); */
                res.redirect('/');
                return;

            }
            else {
                file = await File.create({
                    name: req.file.filename,
                    csvFile: filePath
                });
            }
            const files = File.find({}).sort('-createdAt');
            // console.log('files: ', files);
            req.flash('success', 'you uploaded file successfully');
            /* res.render('home', {
                files: files
            }); */
            res.redirect('/');



        })
    }
    catch (err) {
        console.log('err: ', err);
        return;

    }
}


module.exports.readCSVFile = async function (req, res) {
    try {
        let csvFileData = [];
        // const files = await File.find({}).sort('-createdAt');
        req.flash('success', "Yo are reading the CSV file");
        const fileName = req.params.file;
        let filePath = "." + File.FILE_PATH + req.params.file;
        console.log('filePath: ', filePath);


        fs.createReadStream(filePath)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", function (row) {
                csvFileData.push(row);
            })
            .on("end", () => {
                // console.log('csvFileData6: ', csvFileData);
                res.render('file',
                    {
                        csvFileData: csvFileData,
                        fileName: fileName
                    })
            })
            .on("error", (error) => {
                console.log(error);
            });





    }
    catch (err) {
        console.log('err: ', err);
        return;


    }
}
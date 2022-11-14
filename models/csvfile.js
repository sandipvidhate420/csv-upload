const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const FILE_PATH = path.join('/uploads/CSVFiles/');
const fileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        csvFile: {
            type: String,
            required: true
        }

    }, {
    // created and updated at
    timestamps: true
}
);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', FILE_PATH));//.. woll go back to prev dir and add avatar_path
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // 
        cb(null, file.originalname)
    }
})

//create static methods for userSchema
fileSchema.statics.uploadFile = multer({ storage: storage }).single('csvFile');//upload only single copynot array
fileSchema.statics.FILE_PATH = FILE_PATH;

const File = mongoose.model('File', fileSchema);
module.exports = File;
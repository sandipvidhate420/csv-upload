const mongoose = require('mongoose');
const path = require('path');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
            // unique: true
        },
        author: {
            type: String,
            required: true
        },
        projectDetails: {
            type: String,
            required: true
        },
        issues: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Issue'
            }
        ]

    }, {
    // created and updated at
    timestamps: true
}
);



const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
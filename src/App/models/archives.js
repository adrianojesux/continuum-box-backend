const mongoose = require("./../../database");
const fs = require("fs");
const { promisify } = require("util");

const ArchiveSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: Number,
        required: true
    },
    pathUrl: {
        type: String
    },
    key: String,
    box: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Box",
        required: true
    }

});

ArchiveSchema.pre("save", function(){
    const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
    if(!this.pathUrl){
        this.pathUrl = `${BASE_URL}/files/${this.key}`
    }
});

ArchiveSchema.pre("remove", function(){
    return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
    );
});

module.exports = mongoose.model("Archive", ArchiveSchema);
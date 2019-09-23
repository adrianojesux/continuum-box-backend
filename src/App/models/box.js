const mongoose = require("./../../database");
const Archive = require("./archives");

const BoxSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    archives: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Archive"
    }]
});

BoxSchema.pre("remove", function(next){
    Archive.remove({ box: this._id }, next);
    next();
});

module.exports = mongoose.model("Box", BoxSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    name: {type: String, required:true},
    profession: {type: String, default:"Actor"},
    age: {type: Number, required:true},
    nationality:{type: String, required:true},
    awards : {type: [String], default:[]}
});

const ActorModel = mongoose.model("ActorModel", UserSchema);

module.exports = ActorModel;
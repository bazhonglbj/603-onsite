const mongoose = require ("mongoose");
const isEmail = require('validator').isEmail;

const GroupSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: true,
        lowercase: true,
        match: [/^[a-z0-9!@#$&^_\-.]+$/,'invalid groupname']
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email']
        validate: [ isEmail, 'invalid email' ]
    },
    profile: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    avatarimage:{
        type: String,
        required: true
    }
})

export default mongoose.model("Group", GroupSchema)
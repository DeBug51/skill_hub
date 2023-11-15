const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bcrypt = require("bcrypt")

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// define methods
userSchema.statics.signup = async function (userName, email, password) {
    const exists = await this.findOne({ email })
    if (exists){
        throw Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const passhash = await bcrypt.hash(password, salt)
    
    const user = await this.create({ userName, email, password: passhash })
    
    return user
}

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Email does not match.")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Password does not match.")
    }

    return user
}

module.exports = mongoose.model("Users", userSchema)
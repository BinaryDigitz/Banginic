import mongoose from "mongoose";


const newsLetterSchema = mongoose.Schema({
    subject: {
        type: String,
        maxLength: 50
    },
    body: {
        type: String,
        maxLength: 250
    }
}, { timestamps: true, minimize: false})

const NewsLetterModel = mongoose.model('Newsletter', newsLetterSchema)


export default NewsLetterModel
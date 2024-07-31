import mongoose from "mongoose"

const ListSchema = mongoose.Schema({
    backdrop_path:{
        type:String
    },
    id:{
        type:Number,
        unique:true
    },
    original_title:{
        type:String
    },
    overview:{
        type:String
    },
    poster_path:{
        type:String,
    },
    adult:{
        type:Boolean,
    },
    title:{
        type:String
    },
    original_language:{
        type:String
    },
    genre_ids:{
        type:Array
    },
    popularity:{
        type:Number
    },
    release_date:{
        type:Date
    },
    video:{
        type:Boolean
    },
})

const ListModel = mongoose.model("List",ListSchema)
export default ListModel
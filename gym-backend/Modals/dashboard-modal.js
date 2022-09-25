const mongoose=require("mongoose")

const ExerciseSchema=mongoose.Schema({
    trainer: String,
    joiner: String,
    exercise: String,
    join: Number,
    
})
const YogaModal=mongoose.model("yoga",ExerciseSchema)
module.exports=YogaModal
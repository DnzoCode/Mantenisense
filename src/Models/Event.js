import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const eventSchema = new Schema({
    title:{
        type: String,
        required: [true, 'El titulo es requerido'],
        trim:true,
        maxlength: [40, 'Titulo debetener menos de 40 letras'],
    },
    start:{
        type: Date,
        required: [true, 'La fecha de inicio es requerida'],
    },
    end:{
        type: Date,
        required: [true, 'La fecha de fin es requerida'],
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Event || model('Event', eventSchema);
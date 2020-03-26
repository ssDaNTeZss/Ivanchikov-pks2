let mongoose = require( 'mongoose' );

let packSchema = new mongoose.Schema({
    title: {type: String, required: true}
});

// компиляция модели
mongoose.model('pack', packSchema );
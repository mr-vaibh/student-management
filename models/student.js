const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    physics: {type: Number, default: 0, max: 100},
    chemistry: {type: Number, default: 0, max: 100},
    maths: {type: Number, default: 0, max: 100},
    english: {type: Number, default: 0, max: 100},
    cs: {type: Number, default: 0, max: 100},
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;

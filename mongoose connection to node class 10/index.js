let mongoose = require('mongoose');

async function dbConnect(){
    let connection = await mongoose.connect('mongodb://localhost:27017/school')
    console.log('mongodb is connected');
}

dbConnect();

let Schema = mongoose.Schema;

let students = new Schema({
    s_name:{type:String,require:true},
    s_age:{type:Number,require:true}
});

let studentsModel = mongoose.model('students',students);

// studentsModel.insertMany([{s_name:"Asim",s_age:10}]).then(res=>{console.log(res)});

let raghav = new studentsModel({s_name:"raghav",s_age:11});
raghav.save().then(res=>{console.log(res)})

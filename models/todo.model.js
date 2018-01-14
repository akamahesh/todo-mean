var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var TODOSchema = new mongoose.Schema({
    title : String,
    description : String,
    data : Date,
    status : String
});

TODOSchema.plugin(mongoosePaginate);
const ToDo = mongoose.model('Todo',TODOSchema);

module.exports = ToDo;

const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
});
module.exports= mongoose.model("users",userSchema);






// const mongoose = require('mongoose');
// const productSchema= mongoose.Schema({
//     name:String,
//     price:Number,
//     brand:String,
//     category:String
// });

// module.exports= mongoose.model("products",productSchema);



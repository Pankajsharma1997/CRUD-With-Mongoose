// import the mongoose database  connection string 
  require("./config");
// import the user  Model and Schema for storing the data in db 
 const User = require('./user');

const saveInDB = async () => {
    let data = new User({
        name: "max 100",
        email: "test@gmail.com",
        mobile: 8988235880
        
    });
    const result = await data.save();
    console.log(result);
}
// saveInDB(); // call the function for save the data 
// if we can not  comment this every time the program will run it save the same data again and agian


// updateInDB() function is used for updating the contet in the db 
const updateInDB = async () => {
    let data = await User.updateMany(
        {name:"max 100"},
        {
            $set:{email:"pankajtest@gmail.com"}
        }
    )
    console.log(data)

}
// updateInDB();
 // deleteInDB function is used for delete the data in the db 
const deleteInDB = async ()=>{
    
    let data = await User.deleteOne({name:'max 100'})
    console.log(data);
}
// deleteInDB();

const findInDB = async ()=>{
    // const Product = mongoose.model('products', productSchema);
    let data = await User.find({name:'max 100'})
    console.log(data);
}

findInDB();














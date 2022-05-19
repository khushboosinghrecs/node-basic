const res = require('express/lib/response');
const mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost:27017/e-com");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
const saveInDb = async ()=>{  
    const ProductsModel = mongoose.model('products-com', ProductSchema);
    let data = new ProductsModel({name:"m 10", price: 1000, brand: "new brand", category:" new category"});
    let result = await data.save();
    console.log(result);
}

const saveInDb2 = async () =>{
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product({
        name: "Note Pro",
        price: 250,
        brand: "maxx",
        category: "Mobile"
    })
    const result = await data.save();
    console.log(result);
}

const updateInDb = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne({
        name: "Note Pro"
    }, {
        $set: {price: 3000, name: "note pro"}
    })
    console.log(data);
}


const deleteInDb = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name: 'max 8'});
    console.log(data);
}

const findInDb = async ()=>{
    const Product = mongoose.model('products', productSchema);
    // let data = await Product.find();
    let data = await Product.find({name: 'max 131'});
    console.log(data);
}
findInDb();
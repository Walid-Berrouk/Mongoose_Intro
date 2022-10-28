let mongoose = require("mongoose");
let Product = require("./models/products");
mongoose.connect("mongodb://localhost:27017/grocerydb", { useNewUrlParser: true });

let Schema = mongoose.Schema;

//? Create a document
let products = [
    new Product({ name: "Soda", brand: "Cola" }),
    new Product({ name: "Charbat", brand: "Ifri" }),
    new Product({ name: "Soda", brand: "Pepsi" }),
    new Product({ name: "Soda", brand: "Hamoud" }),
    new Product({ name: "Juice", brand: "Rouiba" }),
]

//? Insert a Document
// product.save()
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });

// Product.insertMany(products)
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });

//? Read All Documents

// Product.find({})
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });

//? Update A Document
// Product.updateMany({name: "Soda"}, {$set: { price: 50 }})
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });

//? Delete Documents

// Product.deleteMany({name: 'Soda'})
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });

//? Find By Id And Delete

// Product.findByIdAndRemove("635b8132b384e21774340bb4")
// .then(function(dbProduct) {
//     console.log(dbProduct);
// })
// .catch(function(err) {
//     console.log(err);
// });
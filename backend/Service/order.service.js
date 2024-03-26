// const Order = require('../Models/Order.model');

// module.exports = {
//   getOrders: async () => {
//     return await Order.find();
//   }
// };
// const Product = require('../Models/Product.model');

// module.exports = {
//   getProducts: async () => {
//     return await Product.find();
//   }
// };
const User = require('../Models/Users.model');


const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://mmahaece07:Maha1431@cluster0.iei1qfm.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";


// Database Name
const dbName = 'test';

// Collection Name (Assuming the collection is called "users")
const collectionName = 'Carts';

async function connectAndFetchOrder() {
  const client = new MongoClient(uri);

  let carts;
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    // Access the test database
    const database = client.db(dbName);

    // Access the "users" collection
    const collection = database.collection(collectionName);

    // Query for all documents in the collection
    carts = await collection.find({}).toArray();

    carts.forEach(user => delete user._id);

    // Print retrieved user data
    // console.log(users);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
    console.log(carts);

    return  carts;
    
  }
}

async function connectAndFetchOrderById(id) {
  const client = new MongoClient(uri);

  let cartItem;
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

  
    // Find documents without _id field
   const order = await collection.findOne(
      {"carts.id":1},
      { projection: { _id: 0, carts: { $elemMatch: { id: 1 } } } }
    );
    
   
    
    console.log(order);
    // If order is not found, return null
    if (!order) {
      return null;
    }
     // Extract the first cart item
     cartItem = order.carts[0];
// console.log(order);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
    console.log(cartItem);

    return cartItem;
  }
}

// Call the function to connect and fetch data
// const getUsers = connectAndFetchData();
// console.log(getUsers);
  module.exports = { 
    connectAndFetchOrder,
    connectAndFetchOrderById,
   }


// const createUser = async() => {

// }


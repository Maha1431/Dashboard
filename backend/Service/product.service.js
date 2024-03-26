// const Product = require('../Models/Product.model');

// module.exports = {
//   getProducts: async () => {
//     return await Product.find();
//   }
// };
const User = require('../Models/Users.model');


const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://mmahaece07:Maha1431@cluster0.iei1qfm.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";


// Database Name
const dbName = 'test';

// Collection Name (Assuming the collection is called "users")
const collectionName = 'Products';

async function connectAndFetchProducts() {
  const client = new MongoClient(uri);

  let products;
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    // Access the test database
    const database = client.db(dbName);

    // Access the "users" collection
    const collection = database.collection(collectionName);

    // Query for all documents in the collection
    products = await collection.find({}).toArray();

    // Remove the _id field from each document
    products.forEach(product => delete product._id);

    // Print retrieved user data
    // console.log(users);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
    return products;
  }
}

// Call the function to connect and fetch data
// const getUsers = connectAndFetchData();
// console.log(getUsers);
  module.exports = { connectAndFetchProducts }


// const createUser = async() => {

// }

const User = require('../Models/Users.model');


const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://mmahaece07:Maha1431@cluster0.iei1qfm.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";


// Database Name
const dbName = 'test';

// Collection Name (Assuming the collection is called "users")
const collectionName = 'Comments';

async function connectAndFetchComment() {
  const client = new MongoClient(uri);

  let comments;
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    // Access the test database
    const database = client.db(dbName);

    // Access the "users" collection
    const collection = database.collection(collectionName);

    // Query for all documents in the collection
     comments = await collection.find({}).toArray();

     comments.forEach(comment => delete comment._id);
     
    // Print retrieved user data
    // console.log(users);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
    return comments;
  }
}

// Call the function to connect and fetch data
// const getUsers = connectAndFetchData();
// console.log(getUsers);
  module.exports = { connectAndFetchComment }


// const createUser = async() => {

// }

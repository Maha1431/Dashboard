const User = require("../Models/Users.model");

const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "test";

// Collection Name (Assuming the collection is called "users")
const collectionName = "Users";

async function connectAndFetchData() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let users;
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected to MongoDB");

    // Access the test database
    const database = client.db(dbName);

    // Access the "users" collection
    const collection = database.collection(collectionName);

    // Query for all documents in the collection
    users = await collection.find({}).toArray();

    // Print retrieved user data
    // console.log(users);
    // Remove the _id field from each document
    users.forEach((user) => delete user._id);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
    return users;
  }
}

async function createUser(newUser) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const result = await collection.insertOne(newUser);

    return result.ops[0];
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}
async function updateUser(userId, updatedUserData) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const result = await collection.findOneAndUpdate(
      { _id: ObjectId(userId) },
      { $set: updatedUserData },
      { returnOriginal: false }
    );

    return result.value;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

async function deleteUser(userId) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    await collection.deleteOne({ _id: ObjectId(userId) });
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to connect and fetch data
// const getUsers = connectAndFetchData();
// console.log(getUsers);
module.exports = {
  connectAndFetchData,
  createUser,
  updateUser,
  deleteUser,
};



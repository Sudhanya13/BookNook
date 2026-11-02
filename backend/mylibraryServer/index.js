// // import express from "express";

// // import cors from "cors";

// // import "dotenv/config";

// // import { MongoClient } from "mongodb";

// // const PORT = process.env.PORT || 5000;

// // const app = express();
// // // const cors = require("cors");

// // // // import mongoclient

// // // require("dotenv").config();
// // // const app = express();
// // // const PORT = 3000;

// // // const client = new MongoClient(
// // //   "mongodb+srv://SmartCrud:TREVr0yPSJo4aLct@cluster0.efgcz4b.mongodb.net/",
// // // );

// // // middleware ----

// // app.use(cors());
// // app.use(express.json());

// // // Define a simple route
// // app.get("/", (req, res) => {
// //   res.send("Express server is running successfully!");

// //   // res.send(users);
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is listening on http://localhost:${PORT}`);
// // });

// // app.post("/add-book", (req, res) => {
// //   const data = req.body;
// //   console.log(data);
// //   res.send({ message: "API working" });
// // });

// // const client = new MongoClient(process.env.MONGO_URI);

// // export async function connectToMongoDB() {
// //   try {
// //     await client.connect();
// //     console.log("You successfully connected to MongoDB!");
// //     return client;
// //   } catch (err) {
// //     console.dir(err);
// //   }
// // }
// // connectToMongoDB();
// // // Call this only when your application terminates
// // // export async function disconnectFromMongoDB() {
// // //   await client.close();
// // // }

// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import { MongoClient } from "mongodb";

// const PORT = process.env.PORT || 5000;
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Initialize MongoDB Client
// const client = new MongoClient(process.env.MONGO_URI);

// async function run() {
//   try {
//     // Connect to MongoDB Database
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");

//     // Specify Database Name and Collection Name
//     const db = client.db("booknook");
//     const addbooksCollection = db.collection("books");

//     // Root GET route
//     app.get("/", (req, res) => {
//       res.send("Express server is running successfully!");
//     });

//     app.get("/all-books", async (req, res) => {
//       try {
//         const result = await addbooksCollection.find().toArray();
//         res.send(result);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//         res.status(500).send({
//           success: false,
//           message: "Failed to fetch books from database",
//         });
//       }
//     });

//     // POST route to insert a book into MongoDB
//     app.post("/add-book", async (req, res) => {
//       try {
//         const bookData = req.body;
//         console.log("Received Data:", bookData);

//         // Insert into MongoDB collection
//         const result = await addbooksCollection.insertOne(bookData);

//         res.status(201).send({
//           success: true,
//           message: "Book added successfully!",
//           insertedId: result.insertedId,
//         });
//       } catch (error) {
//         console.error("Error inserting book:", error);
//         res.status(500).send({
//           success: false,
//           message: "Failed to save book to database",
//         });
//       }
//     });
//     // Express.js backend example
//     app.get("/all-books/:id", async (req, res) => {
//       try {
//         const book = await Book.findById(req.params.id);
//         if (!book) return res.status(404).json({ error: "Book not found" });
//         res.json(book);
//       } catch (err) {
//         res.status(400).json({ error: "Invalid ID format" });
//       }
//     });

//     // Start Express server after successful DB connection
//     app.listen(PORT, () => {
//       console.log(`Server is listening on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//   }
// }

// run();
import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb"; // 1. Added ObjectId here

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize MongoDB Client
const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    // Connect to MongoDB Database
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Specify Database Name and Collection Name
    const db = client.db("booknook");
    const addbooksCollection = db.collection("books");

    // Root GET route
    app.get("/", (req, res) => {
      res.send("Express server is running successfully!");
    });

    app.get("/all-books", async (req, res) => {
      try {
        const result = await addbooksCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send({
          success: false,
          message: "Failed to fetch books from database",
        });
      }
    });

    // 2. Fixed Route for Single Book using Native MongoDB Driver
    app.get("/all-books/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Validate if it's a valid MongoDB ObjectId format first
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: "Invalid ID format" });
        }

        const query = { _id: new ObjectId(id) };
        const book = await addbooksCollection.findOne(query);

        if (!book) {
          return res.status(404).json({ error: "Book not found" });
        }

        res.json(book);
      } catch (err) {
        console.error("Error fetching book by ID:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // POST route to insert a book into MongoDB
    app.post("/add-book", async (req, res) => {
      try {
        const bookData = req.body;
        console.log("Received Data:", bookData);

        const result = await addbooksCollection.insertOne(bookData);

        res.status(201).send({
          success: true,
          message: "Book added successfully!",
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error("Error inserting book:", error);
        res.status(500).send({
          success: false,
          message: "Failed to save book to database",
        });
      }
    });

    // Start Express server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

run();

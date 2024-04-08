const express = require("express");
const app = express();

require('dotenv').config();

const postsRouter = require('./routes/posts.router')

app.use(express.urlencoded({extended: false})); //a built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.json());

app.use("/api/v1/books", postsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
    console.log(`Server Listening to ${PORT}...`)
);



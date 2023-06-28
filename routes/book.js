const express = require("express");

const router = express.Router();

// controllers
// const { register,login } = require("../controllers/auth.js");
const book = require("../controllers/book.js");

//get all books
router.get("/books", book.allBooks);

// GET /books/:id: Retrieve a specific book by ID
router.get("/books/:id", book.getABOOk);

// POST /books: Create a new book
router.post("/books", book.post);

// PUT /books/:id: Update a book by ID
router.put("/books/:id", book.update);

// DELETE /books/:id: Delete a book by ID
router.delete("/books/:id", book.delete);

// router.post("/register", register);
// router.post("/login", login);

// router.get("/auth-check", requireSignin, (req, res) => {
//     res.json({ ok: true });
// });
// router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
//     res.json({ ok: true });
// });

module.exports = router;

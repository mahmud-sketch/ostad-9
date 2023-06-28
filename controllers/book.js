const Book = require("../models/book.js");

exports.allBooks = (req, res) => {
  let query = {};
  let projection = "Title Author Description PublishedYear";
  Book.find(query, projection)
    .then((data) => {
      res.status(201).json({ status: "sucess", data: data });
    })
    .catch((err) => {
      res.status(401).json({ status: "failed", data: err });
    });
};

exports.post = (req, res) => {
  let reqbody = req.body;
  Book.create(reqbody)
    .then((data) => {
      res.status(201).json({ status: "succcess", data: data });
    })
    .catch((err) => {
      res.status(401).json({ status: "failed", data: err });
    });
};

exports.getABOOk = (req, res) => {
  const id = req.params.id;
  let query = { _id: id };
  let projection = "Title Author Description PublishedYear";
  Book.find(query, projection)
    .then((data) => {
      res.status(201).json({ status: "sucess", data: data });
    })
    .catch((err) => {
      res.status(401).json({ status: "failed", data: err });
    });
};

exports.delete = (req, res) => {
  // console.log(req);
  const id = req.params.id;
  console.log(id);
  let query = { _id: id };

  Book.deleteOne(query)
    .then(() => {
      res.json({ status: "delete sucess" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
    });
};

exports.update = (req, res) => {
  let id = req.params.id;
  let query = req.body;
  Book.updateOne({ _id: id }, query)
    .then(() => {
      res.json({ status: "update sucess" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
    });
};

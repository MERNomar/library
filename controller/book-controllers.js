const Books = require("../models/book");

const create_book = (req, res) => {
  const book = new Books(req.body);
  book
    .save()
    .then((e) => {
      setTimeout(res.redirect("/"), 15000);
      
    })
    .catch((err) => {
      console.log(err);
    });
};

const main_getter = (req, res) => {
  Books.find()
    .then((books) => {
      res.render("index", { books });
    })
    .catch((err) => {
      res.send(err);
    });
};

const book_delete = (req, res) => {
  const id = req.params.id;
  Books.findByIdAndDelete(id)
    .then((e) => res.redirect("/"))
    .catch((err) => res.redirect("/"));
};

const get_homePage = (req, res) => {
  res.render("homepage");
};

/*const find_book = (req , res){
  res.send(req.body)
}*/



module.exports = {
  main_getter,
  create_book,
  book_delete,
  get_homePage,
  find_book
};


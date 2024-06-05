const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST } = require("./config")

mongoose

  .connect(
    "mongodb+srv://Vol4enak:OmkDsaH5jXoFZ5t6@nodejs-db.peu48kx.mongodb.net/Contact-book"
  )

  .then(() => {
    app.listen(3001, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

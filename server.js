const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/static"));
}

app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/profilesdb",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));

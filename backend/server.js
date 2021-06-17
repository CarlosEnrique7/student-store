const express = require("express");
const cors = require("cors");
const storeRouter = require("./routes/store");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", storeRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

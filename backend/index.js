const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const connectdb = require("./database/connectdb");
const hostelRoute = require("./routes/hostelRoute");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");

app.use(bodyParser.json());
app.use(cors());
dotenv.config();
//routes
app.use("/api/hostel", hostelRoute);
app.use("/api/auth", userRoute);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../frontend/src/uploads"))
);
//database connection
connectdb();
app.listen(8000, () => {
  console.log(`Server running is port 8000`);
});

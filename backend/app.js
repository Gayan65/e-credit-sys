import express from "express";
import cors from "cors";

const app = express();
const port = 4000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
